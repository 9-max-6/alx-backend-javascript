export default function getListStudentIds(listOfStudentObjects) {
  if (typeof listOfStudentObjects === Array) {
    const listIds = listOfStudentObjects.map((student) => student.id);
    return listIds;
  } else {
    return [];
  }
}
