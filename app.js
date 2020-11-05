const express = require('express')
const app = express()
const port = 5000

app.get('/instructors', (req, res) => {
  res.send('instructors')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})