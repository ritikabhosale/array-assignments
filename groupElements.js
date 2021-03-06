const areArraysEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }

  for (let index = 0; index < arr1.length; index++) {
    if (!isEqual(arr1[index], arr2[index])) {
      return false;
    }
  }
  return true;
};

const areBothArrays = function (element1, element2) {
  return Array.isArray(element1) && Array.isArray(element2);
};

const isEqual = function (element1, element2) {
  if (areBothArrays(element1, element2)) {
    return areArraysEqual(element1, element2);
  }
  return element1 === element2;
};

const classifyByIdentity = function (groups, element) {
  for (let index = 0; index < groups.length; index++) {
    if (isEqual(groups[index][0], element)) {
      groups[index].push(element);
      return groups;
    }
  }
  groups.push([element]);
  return groups;
};

const groupElements = function (arr) {
  let groups = [];

  for (let index = 0; index < arr.length; index++) {
    groups = classifyByIdentity(groups, arr[index]);
  }
  return groups;
};

console.log(groupElements([1, 2, 3]));
console.log(groupElements([1, 2, 3, 3, 1, 5]));
console.log(groupElements([1, [1, 2], 1]));
console.log(groupElements([1, [1, 2, [1]], [1, 2, [1]], [1, 2]]));
console.log(groupElements([1, [1, 2, [1]], [1, 2, [2]], [1, 2]]));
console.log(groupElements([1, [1, 2], 1, [1, 2]]));
