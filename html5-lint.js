var fs = require('fs')
var html5Lint = require('html5-lint')

fs.readFile('index.html', 'utf8', function (err, html) {
  if (err) { throw err }

  console.log('Start checking HTML5 Validation')

  html5Lint(html, function (err, results) {
    if (err) {
      if (err === 'Error: Bad Gateway' || err === 'Error: Gateway Timeout') {
        console.log('It seems a network issue happens. We can\'t validate HTML5 at this moment.')
      } else {
        console.log(err)
      }

      process.exit(1)
    }

    if (results) {
      if (results.messages.length > 0) {
        results.messages.forEach(function (msg) {
          var type = msg.type
          var message = msg.message

          console.log('HTML5 Lint [%s]: %s', type, message)
        })

        process.exit(1)
      }
    }

    console.log('-- Error --')
    console.log(err)
    console.log('-- Results --')
    console.log(results)
    console.log('-- PASSED --')
    console.log('There is no error found!')
    process.exit(0)
  })
})
