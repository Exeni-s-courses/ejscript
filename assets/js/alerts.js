var reduce = function (nums, fn, init) {
  if (nums.length == 0) return init;
  let val = 0;
  nums.forEach((element) => {
    val = fn(init, element);
    init = val;
  });
  return val;
};
const arr = [1, 2, 3, 4];
const init = 0;
const fn = function sum(accum, curr) {
  return accum + curr;
};
const res = reduce(arr, fn, init);
console.log(res);
