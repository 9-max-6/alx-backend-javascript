const fs = require("fs").promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, "utf8");
    let lines = data.split("\n").filter((line) => line.trim() !== "");
    lines.shift();

    if (lines.length === 0) {
      throw new Error("No valid student data found in the file.");
    }

    const visited = [];
    lines.forEach((line) => {
      const fields = line.split(",");
      if (fields.length < 4) return;
      const subject = fields.at(-1).trim();
      if (!visited.includes(subject)) {
        visited.push(subject);
      }
    });

    console.log(`Number of students: ${lines.length}`);

    visited.forEach((subject) => {
      const thisSubject = [];

      lines.forEach((line) => {
        const fields = line.split(",");
        if (fields.length < 4) return;
        if (fields.at(-1).trim() === subject) {
          thisSubject.push(fields.at(0).trim());
        }
      });

      console.log(
        `Number of students in ${subject}: ${
          thisSubject.length
        }. List: ${thisSubject.join(", ")}`
      );
    });
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
