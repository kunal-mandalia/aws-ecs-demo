const app = require('express')()
const port = process.env.PORT || 5000

app.get('/sayhello', (req, res) => {
  return res.status(200).json({
    hello: 'world'
  })
})

app.listen(port)
console.log(new Date, `aws-ecs-demo api listening on port ${port}`)
