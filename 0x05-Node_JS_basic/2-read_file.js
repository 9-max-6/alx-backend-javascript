function countStudents(path) {
  const fs = require("fs");
  const pc = require("process");
  const visited = new Array();
  let lines = "";

  try {
    const data = fs.readFileSync(path, "utf8");
    lines = data.split("\n");
    lines.shift();
    console.log(lines[0]);
    if (lines[lines.length - 1] === "") {
      lines.pop();
    }

    lines.forEach((line) => {
      if (line === "\n") {
        return;
      }
      const subject = line.split(",").at(-1);
      if (!visited.includes(subject)) {
        visited.push(subject);
      }
    });
  } catch (err) {
    throw Error("Cannot load the database");
  }
  //   all students
  console.log(`Number of students: ${lines.length}`);

  //   per subject
  visited.forEach((subject) => {
    const thisSubject = new Array();
    lines.forEach((line) => {
      if (line.split(",").at(-1) === subject) {
        thisSubject.push(line.split(",").at(0));
      }
    });
    process.stdout.write(
      `Number of students in ${subject}: ${thisSubject.length}.`
    );
    process.stdout.write("List: ");
    let index = 0;
    thisSubject.forEach((student) => {
      process.stdout.write(`${student}`);
      if (index !== thisSubject.length - 1) {
        process.stdout.write(", ");
      } else {
        process.stdout.write("\n");
      }
      index++;
    });
  });
}

module.exports = countStudents;
