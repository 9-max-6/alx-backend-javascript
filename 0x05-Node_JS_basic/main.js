const countStudents = require('./test');

const resp = countStudents('./database.csv');

function getMessage(subjectName) {
  const template = `Number of students in ${subjectName[0]}: ${subjectName[1].length}.`;
  const studentNames = new Array();

  for (const index in subjectName[1]) {
    const curr = subjectName[1][index].firstname;
    studentNames.push(curr);
  }
  return template.concat(`List: ${studentNames.join(', ')}`);
}

resp
  .then((value) => {
    const messages = new Array();
    const pre = 'This is the list of our students';

    const totalStudents = Object.values(value).reduce(
      (pre, cur) => (pre || []).length + cur.length
    );

    const countMessage = `Number of students: ${totalStudents}`;

    messages.push(pre);
    messages.push(countMessage);

    Object.entries(value).forEach((subjectName) => {
      messages.push(getMessage(subjectName));
    });

    console.log(messages);
  })
  .catch((err) => {
    console.error(err);
  });
