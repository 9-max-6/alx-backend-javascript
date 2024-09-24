const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const lines = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');

  const studentsByField = {};
  const headers = lines[0].split(',');
  const studentAttributes = headers.slice(0, headers.length - 1);

  for (const record of lines.slice(1)) {
    const attributes = record.split(',');
    const studentData = attributes.slice(0, attributes.length - 1);
    const field = attributes[attributes.length - 1];

    if (!studentsByField[field]) {
      studentsByField[field] = [];
    }

    const studentObject = studentAttributes.map((attr, i) => [
      attr,
      studentData[i],
    ]);
    studentsByField[field].push(Object.fromEntries(studentObject));
  }

  const totalStudentCount = Object.values(studentsByField).flat().length;
  console.log(`Number of students: ${totalStudentCount}`);

  for (const [field, students] of Object.entries(studentsByField)) {
    const names = students.map((student) => student.firstname).join(', ');
    console.log(
      `Number of students in ${field}: ${students.length}. List: ${names}`
    );
  }
};

module.exports = countStudents;
