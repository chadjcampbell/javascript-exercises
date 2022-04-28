const ftoc = function(num) {
  let newNum = (num-32) * 5/9
  let rounded = Math.round(newNum * 10) / 10
  return rounded;
};

const ctof = function(num) {
  let newNum = (num*9/5) + 32
  let rounded = Math.round(newNum * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
