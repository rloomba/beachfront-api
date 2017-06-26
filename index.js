var jsonist = require('jsonist')

var url = 'http://api.public.bfmio.com/api/report/generate'

module.exports = function (token, data, cb) {

  var opts = {
    headers: { 'Content-Type': 'application/json',
      'token': token
    }
  }

  jsonist.post(url, data, opts, function (err, body, res) {
    if (err) return cb(err)
    if (res.statusCode >= 400) {
      return cb(new Error(['statusCode', res.statusCode, url].join(' ')))
    }

    var rows = (body || {}).data
    cb(null, rows)
  })
}
