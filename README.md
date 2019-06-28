# truffle-plugin-solhint
[![Donate with Ethereum](https://en.cryptobadges.io/badge/micro/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)](https://en.cryptobadges.io/donate/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)

[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/solhint/Lobby)
[![NPM version](https://badge.fury.io/js/truffle-plugin-solhint.svg)](https://npmjs.org/package/truffle-plugin-solhint)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/protofire/truffle-plugin-solhint/master/LICENSE)
[![dependencies Status](https://david-dm.org/protofire/truffle-plugin-solhint/status.svg)](https://david-dm.org/protofire/truffle-plugin-solhint)
[![devDependencies Status](https://david-dm.org/protofire/truffle-plugin-solhint/dev-status.svg)](https://david-dm.org/protofire/truffle-plugin-solhint?type=dev)

This truffle plugin allows you to run [Solhint](https://github.com/protofire/solhint) linter in your smart contracts source code, straight from the Truffle CLI.

## Installation
1. Install the plugin with npm
```sh
npm install truffle-plugin-solhint
```
2. Add the plugin to your `truffle.js` or `truffle-config.js` file
```js
module.exports = {
  /* ... rest of truffle-config */
  plugins: [
    'truffle-plugin-solhint'
  ]
}
```

## Usage
Run the following command.

```
truffle run solhint
```

## Licence

MIT

## Back us
truffle-plugin-solhint is free to use and open-sourced. If you value our effort and feel like helping us to keep pushing this plugin forward, you can send us a small donation. We'll highly appreciate it :)

[![Donate with Ethereum](https://en.cryptobadges.io/badge/micro/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)](https://en.cryptobadges.io/donate/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)
