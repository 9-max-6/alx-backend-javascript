export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = [];

  for (const emp of reportWithIterator) {
    allEmployees.push(emp);
  }

  return allEmployees.join(' | ');
}
