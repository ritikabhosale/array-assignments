const copyGrid = function (grid) {
  const copiedGrid = [];
  for (let index = 0; index < grid.length; index++) {
    copiedGrid.push(grid[index].slice(0));
  }
  return copiedGrid;
};

const concatAndMergeSubsets = function (prefix, subsets) {
  const knownSubsets = copyGrid(subsets);
  for (let index = 0; index < knownSubsets.length; index++) {
    knownSubsets[index].unshift(prefix);
  }
  return subsets.concat(knownSubsets);
};

const subsets = function (set) {
  if (set.length === 0) {
    return [[]];
  }
  const prefix = set[0];
  return concatAndMergeSubsets(prefix, subsets(set.slice(1)));
};

console.log(subsets([1, 2, 3]));
