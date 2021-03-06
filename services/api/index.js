const app = require('express')()
const port = process.env.PORT || 5000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/status', (req, res) => {
  res.status(200).json({
    status: "OK"
  })
})

app.get('/sayhello', (req, res) => {
  res.status(200).json({
    hello: 'world'
  })
})

app.listen(port)
console.log(new Date, `aws-ecs-demo api listening on port ${port}`)
