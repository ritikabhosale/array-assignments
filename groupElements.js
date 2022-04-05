const areArraysEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }

  if (arr1.length === 0 && arr2.length === 0) { return true; }

  let areCurrentElementsEqual = arr1[0] === arr2[0];

  if (Array.isArray(arr1[0])) {
    areCurrentElementsEqual = areArraysEqual(arr1[0], arr2[0]);
  }
  return areCurrentElementsEqual && areArraysEqual(arr1.slice(1), arr2.slice(1));
};

const isArrayPresent = function (arr, list) {
  for (let index = 0; index < list.length; index++) {
    if (Array.isArray(list[index])) {
      if (areArraysEqual(arr, list[index])) { return true; }
    }
  }
  return false;
};

const isPresent = function (element, list) {
  if (Array.isArray(element)) {
    return isArrayPresent(element, list);
  }
  return list.includes(element);
};

const arrayPresentAt = function (arr, list) {
  for (let index = 0; index < list.length; index++) {
    if (Array.isArray(list[index])) {
      if (areArraysEqual(arr, list[index])) { return index; }
    }
  }
  return -1;
};

const presentAt = function (element, list) {
  if (Array.isArray(element)) {
    return arrayPresentAt(element, list);
  }
  return list.indexOf(element);
};

const unique = function (arr) {
  const uniqueElements = [];
  for (let index = 0; index < arr.length; index++) {
    if (!isPresent(arr[index], uniqueElements)) {
      uniqueElements.push(arr[index]);
    }
  }
  return uniqueElements;
};

const createEmptyArrays = function (count) {
  const emptyArrays = [];
  for (let index = 0; index < count; index++) {
    emptyArrays.push([]);
  }
  return emptyArrays;
};

const groupElements = function (arr) {
  const uniqueElements = unique(arr);
  const groups = createEmptyArrays(uniqueElements.length);

  for (let index = 0; index < arr.length; index++) {
    const position = presentAt(arr[index], uniqueElements);
    groups[position].push(arr[index]);
  }
  return groups;
};

console.log(groupElements([1, 2, 3]));
console.log(groupElements([1, 2, 3, 3, 1, 5]));
console.log(groupElements([1, [1, 2], 1]));
console.log(groupElements([1, [1, 2, [1]], [1, 2, [1]], [1, 2]]));
console.log(groupElements([1, [1, 2, [1]], [1, 2, [2]], [1, 2]]));
console.log(groupElements([1, [1, 2], 1, [1, 2]]));
