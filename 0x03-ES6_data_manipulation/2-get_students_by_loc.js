export default function getStudentsByLocation(listStudents, city) {
  const filteredStudents = listStudents.filter(
    (student) => student.location === city
  );
  return filteredStudents;
}
