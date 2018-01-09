# IEEE Binary16 Modbus

A small library that converts a modbus register (16-bit integer) to an IEEE-754 Binary16 Floating Point Number

## Installation

```npm install ieee754-binary16-modbus --save```

## Usage

```
var intToFloat16 = require("ieee754-binary16-modbus").intToFloat16;
var modbusRegisterValue = 0b0011110000000001;
var floatValue = intToFloat16(modbusRegisterValue);
// floatValue should equal 1.0009765625
```

## Tests

```npm test```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

-   1.0.0 Initial Release
