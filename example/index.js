var bf = require('../')

var creds = require('./creds.json')

var data = {
  keys: ["inventory"],
  metrics: ["impressions", "clicks", "requests", "revenue"],
  fromDate: "2017-07-04",
  toDate: "2017-07-04"
}

bf(creds.token, data, function (err, data) {
  if (err) return console.error(err)
  console.log('rows', data.data)
  console.log('columns', data.columns)
  console.log('status', data.status)
})
