function accumulate(arr, func) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i]));
  }
  return newArray;
}



module.exports = accumulate;