// Register service worker to control making site work offline
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/roknshadeed/scripts/sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}

var deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  // Prevents the default mini-infobar or install dialog from appearing on mobile
  e.preventDefault();
  // Save the event because you'll need to trigger it later.
  deferredPrompt = e;
  // Show your customized install prompt for your PWA
  // Your own UI doesn't have to be a single element, you
  // can have buttons in different locations, or wait to prompt
  // as part of a critical journey.
  showInAppInstallPromotion();
});

function showInAppInstallPromotion() {
  Alpine.store("installable", true);
}

document.addEventListener("alpine:init", () => {
  Alpine.store("installable", false);
  Alpine.data("app", () => {
    return {
      loaded: false,
      data: {},

      async init() {
        let compressed = await fetch("./data.json").then((res) =>
          res.arrayBuffer()
        );
        fflate.decompress(new Uint8Array(compressed), {}, (err, data) => {
          if (err) throw err;
          const decompressed = fflate.strFromU8(data);
          data = JSON.parse(decompressed);

          this.data = data;
          this.loaded = true;
        });
      },
    };
  });
});

function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  var matrix = [];

  // Increment along the first column of each row
  var i;
  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // Increment each column in the first row
  var j;
  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) == a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          )
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

function findClosestMatches(searchTerm, array, getFieldFn, maxMatches = 10) {
  const matches = [];

  array.forEach((item) => {
    const fieldValue = getFieldFn(item).toLowerCase();
    const distance = levenshteinDistance(searchTerm.toLowerCase(), fieldValue);
    const startsWithSearchTerm = fieldValue.startsWith(
      searchTerm.toLowerCase()
    );
    matches.push({ item, distance, startsWithSearchTerm });
  });

  // Filter matches that start with the search term
  const matchesStartingWithSearchTerm = matches.filter(
    (match) => match.startsWithSearchTerm
  );

  // Sort remaining matches by Levenshtein Distance (ascending)
  const remainingMatches = matches.filter(
    (match) => !match.startsWithSearchTerm
  );
  remainingMatches.sort((a, b) => a.distance - b.distance);

  // Combine matches, ensuring matches starting with search term come first
  const combinedMatches = [
    ...matchesStartingWithSearchTerm,
    ...remainingMatches,
  ];

  // Return the first 'maxMatches' matches
  return combinedMatches.slice(0, maxMatches).map((match) => match.item);
}
