const http = require('http');

const fs = require('fs');

function getMessage(subjectName) {
  const template = `Number of students in ${subjectName[0]}: ${subjectName[1].length}. `;
  const studentNames = [];

  for (const entry of subjectName[1]) {
    const curr = entry.firstname;
    studentNames.push(curr);
  }
  return template.concat(`List: ${studentNames.join(', ')}`);
}

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    }
    if (data) {
      const fileLines = data.toString('utf-8').trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(
          0,
          studentRecord.length - 1,
        );
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames.map((propName, idx) => [
          propName,
          studentPropValues[idx],
        ]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
      resolve(studentGroups);
    }
  });
});

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.method === 'GET' && req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && req.url === '/students') {
    const resp = countStudents(process.argv[2]);

    resp
      .then((value) => {
        const messages = [];
        const pre = 'This is the list of our students';

        const totalStudents = Object.values(value).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );

        const countMessage = `Number of students: ${totalStudents}`;

        messages.push(pre);
        messages.push(countMessage);

        Object.entries(value).forEach((subjectName) => {
          messages.push(getMessage(subjectName));
        });

        res.end(messages.join('\n'));
      })
      .catch(() => {
        res.statusCode = 403;
        res.end('This is the list of our students\nCannot load the database');
      });
  }
});

module.exports = app;
