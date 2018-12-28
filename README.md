# Cherry Pug Connector

[![Build Status](https://travis-ci.com/Lund-Org/cherry-pug-connector.svg?branch=master)](https://travis-ci.com/Lund-Org/cherry-pug-connector)

A plugin to use pug as the html renderer in cherry 🍒

## Installation

Use the package manager [npm](http://npmjs.com) to install Cherry Pug Connector.

```bash
npm install @lund-org/cherry-pug-connector
```

## Usage

Checkout the example in the [example folder of cherry](https://github.com/Lund-Org/cherry/tree/master/example/02-multiple-response-type/).
Of course, you need a cherry app to use this connector :

```javascript
const Cherry = require('@lund-org/cherry')
const CherryPugConnector = require('@lund-org/cherry-pug-connector')

const cherry = new Cherry()
cherry.configure(routes, [], options)
// The following line is the important one
cherry.registerPlugin(CherryPugConnector)
cherry.start(options)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/Lund-Org/cherry-handlebars-connector/blob/master/LICENSE)
