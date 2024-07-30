export default function getListStudentIds(listOfStudentObjects) {
  if (Array.isArray(listOfStudentObjects)) {
    const listIds = listOfStudentObjects.map((student) => student.id);
    return listIds;
  }
  return [];
}
