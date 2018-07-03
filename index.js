const express = require('express')
const bodyParser = require('body-parser')

const contactRoute = require('./routes/contact')

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use('/contact', contactRoute)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
