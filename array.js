function flattenArray(array) {
    let result = [];
    for (const item of array) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}


function flattenArrayIter(arr) {
  let result = [];

  return result;
}