const fs = require("fs");

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => {
  // Check if the file exists and is a valid file
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error("Cannot load the database");
  }

  // Read and split the file content into lines
  const lines = fs.readFileSync(dataPath, "utf-8").trim().split("\n");

  // Initialize a dictionary to hold students grouped by their fields
  const studentsByField = {};
  const headers = lines[0].split(",");
  const studentAttributes = headers.slice(0, headers.length - 1);

  // Iterate over each line, starting from the second line
  for (const record of lines.slice(1)) {
    const attributes = record.split(",");
    const studentData = attributes.slice(0, attributes.length - 1);
    const field = attributes[attributes.length - 1];

    // Group students by their field of study
    if (!studentsByField[field]) {
      studentsByField[field] = [];
    }

    // Create an object for the student's properties and add to the corresponding group
    const studentObject = studentAttributes.map((attr, i) => [
      attr,
      studentData[i],
    ]);
    studentsByField[field].push(Object.fromEntries(studentObject));
  }

  // Calculate the total number of students
  const totalStudentCount = Object.values(studentsByField).flat().length;
  console.log(`Number of students: ${totalStudentCount}`);

  // Print the number of students in each field and their names
  for (const [field, students] of Object.entries(studentsByField)) {
    const names = students.map((student) => student.firstname).join(", ");
    console.log(
      `Number of students in ${field}: ${students.length}. List: ${names}`
    );
  }
};

module.exports = countStudents;
