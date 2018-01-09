var assert = require('assert');
var intToFloat16 = require("./index").intToFloat16;


// Test values taken from wikipedia page
var test_values = [
    [0b0000000000000000, 0.],
    [0b1000000000000000, -0.],
    [0b0011110000000000, 1],
    [0b0011110000000001, 1.0009765625],
    [0b1011110000000001, -1.0009765625],
    [0b1100000000000000, -2],
    [0b0100000000000000, 2],
    [0b0111101111111111, 65504.],
    [0b1111101111111111, -65504.],
    [0b0000010000000000, 6.10352e-5],
    [0b0000001111111111, 6.09756e-5],
    [0b0000000000000001, 5.96046e-8],
    [0b0111110000000000, Infinity],
    [0b1111110000000000, -Infinity],
    [0b0011010101010101, 0.333251953125]
]

describe('intToFloat16', function(){
  for (var i = 0; i < test_values.length; i++){
    var testInput = test_values[i][0];
    var expectedVal = test_values[i][1];

    var testVal = intToFloat16(testInput);

    it("should return " + test_values[i][1] + " for " + test_values[i][0].toString(2) + " : " + testVal, function(){
      assert.equal(testVal, expectedVal);
    })
  }
})
