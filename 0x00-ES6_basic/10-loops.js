export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const idx of array) {
    array[i] = appendString + idx; // eslint-disable-line no-param-reassign
    i += 1;
  }

  return array;
}
