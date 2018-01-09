var pad = function(start, numChars, padWith){
  var fullString = Array(numChars).join(padWith) + start;
  return fullString.substring(fullString.length - 16);
}

var intToFloat16 = function(intToConvert){
  var binRep = pad(intToConvert.toString(2), 16, "0");
  var sign = 1;
  var fraction;
  if (parseInt(binRep[0]) === 1){
    sign = -1;
  }
  var exponent = parseInt(binRep.substring(1, 6), 2);
  if (exponent === 30.0){
    fraction = parseInt("1".concat(binRep.substring(7, 17)), 2);
  } else {
    fraction = parseInt(binRep.substring(7, 17), 2);
  }

  // console.log("Sign: " + sign);
  // console.log("exponent: " + exponent + " -- " + binRep.substring(1, 6));
  // console.log("fraction: " + fraction);

  if (exponent === 0){
    return sign * (2 ** -14) * fraction / (2.0 ** 10.0);
  } else if (exponent === 0b11111){
    if (fraction == 0){
      return sign * Infinity;
    } else {
      return NaN;
    }
  } else {
    var frac_part = 1.0 + fraction / (2.0 ** 10.0);
    return sign * (2 ** (exponent - 15)) * frac_part;
  }
}

module.exports = {
  pad: pad,
  intToFloat16: intToFloat16
}
