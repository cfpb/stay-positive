# stay-positive [![Build Status](https://secure.travis-ci.org/cfpb/stay-positive.png?branch=master)](http://travis-ci.org/cfpb/stay-positive)

[![NPM](https://nodei.co/npm/stay-positive.png?downloads=true)](https://nodei.co/npm/stay-positive/)

> Return 0 if the provided number is negative or optionally return the absolute value.

## Installation

```sh
npm install stay-positive --save
```

## Usage

```javascript
var stayPositive = require('stay-positive');

stayPositive(-1234); // 0
stayPositive(-1234.5678); // 0
stayPositive(-1234, {abs: true}); // 1234
stayPositive(-1234.5678, {abs: true}); // 1234.5678
stayPositive(1234): // 1234
stayPositive('Party time, yo.') // Party time, yo.
```

## Contributing

Please read the [Contributing guidelines](CONTRIBUTING.md).

### Running Tests

We are using [nodeunit](https://github.com/caolan/nodeunit) to test. To run tests, first install nodeunit and any dependencies via npm:

```
npm install
```

Run tests with:

```
npm test
```

## License

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](http://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

Software source code previously released under an open source license and then modified by CFPB staff is considered a "joint work" (see 17 USC § 101); it is partially copyrighted, partially public domain, and as a whole is protected by the copyrights of the non-government authors and must be released according to the terms of the original open-source license.

For further details, please see: http://www.consumerfinance.gov/developers/sourcecodepolicy/
