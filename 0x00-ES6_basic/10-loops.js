export default function appendToEachArrayValue(array, appendString) {
  newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
    return array;
  }
}
