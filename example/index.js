var bf = require('../')

var creds = require('./creds.json')

var data = {
  keys: ["publisher"],
  metrics: ["impressions", "clicks", "requests", "revenue"],
  fromDate: "2017-06-01",
  toDate: "2017-06-23"
}

bf(creds.token, data, function (err, rows) {
  if (err) return console.error(err)
  console.log('rows', rows)
})
