
exports.min = function min (array) {
    if (array.length==0) {return 0;}
    return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (array.length==0) {return 0;}
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (array.length==0) {return 0;}
    return array.reduce((sum, current) => sum + current, 0)/array.length;
}
