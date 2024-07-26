export default function createIteratorObject(report) {
  return (function* _(all) {
    for (const dep of Object.values(all)) {
      for (const emp of dep) {
        yield emp;
      }
    }
  }(report.allEmployees));
}
