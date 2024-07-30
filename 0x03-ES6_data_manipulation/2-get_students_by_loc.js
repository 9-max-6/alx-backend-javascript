export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((student) => student.city === city);
}
