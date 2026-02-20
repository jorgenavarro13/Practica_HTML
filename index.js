const express = require('express')
const app = express()
const path = require('path')


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.static('public'));

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})

