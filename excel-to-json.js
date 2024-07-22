const ExcelJS = require("exceljs");
const fflate = require("fflate");
const fs = require("fs");

async function main() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("./Rokn Shadeed - Boycott List.xlsx");

  let outputJSON = {};
  for (const sheet of workbook.worksheets) {
    const sheetName = sheet.name;
    const rows = sheet.getSheetValues();

    const sheetImages = sheet.getImages();
    sheetImages.forEach((image) => {
      let row = image.range.tl.nativeRow + 1;
      let col = image.range.tl.nativeCol + 1;

      let image_buf = workbook.media[image.imageId].buffer;
      let image_md5 = require("crypto")
        .createHash("md5")
        .update(image_buf)
        .digest("hex");
      fs.writeFile(`./images/${image_md5}.png`, image_buf, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
      rows[row][col] = image_md5 + ".png";
    });

    const headerRow = rows[1];
    const sheetData = rows
      .map((row) => {
        return headerRow.reduce((acc, header, col) => {
          if (!row[col]) return acc;

          acc[header] = row[col].result || row[col].text || row[col];

          if (acc[header].formula && !acc[header].result) {
            acc[header] = "";
          }

          return acc;
        }, {});
      })
      .filter((row) => Object.keys(row).length > 0)
      .filter((row) => row.Show !== false);

    outputJSON[sheetName] = sheetData;
  }

  require("fs").writeFileSync(
    "./data.json",
    fflate.compressSync(fflate.strToU8(JSON.stringify(outputJSON)), {
      level: 6,
      mem: 8,
    })
  );
}

main();
