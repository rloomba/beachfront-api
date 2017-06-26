# beachfront-api #

A simple module for accessing beachfront report data, inspired heavily by @davidguttman's [lkdq-api](https://github.com/davidguttman/lkqd-api).

## Example ##

```js
var bf = require('beachfront-api')

var token = 'abcdef0123456789'

var data = {
  "keys": ["adid"],
  "metrics": ["ctr"],
  "fromDate": "2017-05-01",
  "toDate": "2017-05-31"
}

bf(token, date, function (err, rows) {
  if (err) return console.error(err)

  console.log('ctr data', rows)
})

```

# License #

MIT

