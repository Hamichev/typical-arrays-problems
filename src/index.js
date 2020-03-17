
exports.min = function min (array) {
    let A=array[0];
    for (let i=0;i<array.length;i++)
    {
        if (array[i]<A) {A=array[i];}
        if (i==array.length-1) {return A;}
    }
    if (array.length==0) {return 0;}
}

exports.max = function max (array) {
  for (let i=0,A=0;i<array.length;i++)
    {
        if (array[i]>A) {A=array[i];}
        if (i==array.length-1) {return A;}
    }
    if (array.length==0) {return 0;}
}

exports.avg = function avg (array) {
  let result = array.reduce((sum, current) => sum + current, 0);
    if (array.length==0) {return 0;}
    return result=result/array.length;
}
