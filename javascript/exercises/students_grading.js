const actualPoints = 80;
const graduateLimit = 75;
const studentName = "Milan Dlouhý";

if (actualPoints >= 75) {
  console.log(
    `${studentName} prospěl s ${actualPoints} body, minimum bylo ${graduateLimit} bodů`
  );
} else {
  console.log(
    `${studentName} neprospěl s ${actualPoints} body, chybělo mu ${
      graduateLimit - actualPoints
    } bodů. Minimum bylo ${graduateLimit} bodů`
  );
}
