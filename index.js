const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const api = require('./routes/api');
app.use('/api', api)

app.listen(port, () => {
  console.log('Listening on port', port)
})
