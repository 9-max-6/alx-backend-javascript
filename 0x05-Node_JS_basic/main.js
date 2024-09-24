const countStudents = require('./test');

const resp = countStudents('./datbase.csv');

resp
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
