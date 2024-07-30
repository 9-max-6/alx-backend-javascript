export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((previousValue, student) => previousValue + student.id, 0);
}
