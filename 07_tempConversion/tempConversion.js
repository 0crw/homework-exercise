const ftoc = function(ftoc) {
  return Math.round((ftoc - 32) * (5/9) *10) /10;
};

const ctof = function(ctof) {
  return Math.round((ctof * 9/5 + 32) *10) /10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
