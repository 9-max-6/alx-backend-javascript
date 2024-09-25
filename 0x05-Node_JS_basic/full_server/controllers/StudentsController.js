const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.status(200);
    const resp = readDatabase(process.argv[2]);

    resp
      .then((value) => {
        const messages = [];
        const pre = 'This is the list of our students';

        messages.push(pre);

        Object.entries(value).forEach((subjectName) => {
          const newMessage = `Number of students in ${subjectName[0]}: ${
            subjectName[1].length
          }. List: ${subjectName[1].join(', ')}`.trim();
          messages.push(newMessage);
        });

        response.send(messages.join('\n'));
      })
      .catch(() => {
        response.status(500);
        response.send('This is the list of our students\nCannot load database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const students = readDatabase(process.argv[2]);

    students
      .then((value) => {
        if (request.params.major === 'CS') {
          response.status(200);
          const message = `List: ${value.CS.join(', ')}`;
          response.send(message);
        } else if (request.params.major === 'SWE') {
          response.status(200);
          const message = `List: ${value.SWE.join(', ')}`;
          response.send(message);
        } else {
          response.status(500);
          response.send('Major parameter must be CS or SWE');
        }
      })
      .catch(() => {
        response.status(500);
        response.send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
