const ExcelJS = require("exceljs");

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
      rows[row][col] = workbook.media[image.imageId].buffer.toString("base64");
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

  require("fs").writeFileSync("./data.json", JSON.stringify(outputJSON));
}

main();
