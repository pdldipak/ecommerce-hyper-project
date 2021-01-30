const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const data = require('./data.json');

const app = express();

//apply middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(JSON.stringify(data.products));
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

// port
const port = process.env.PORT || 3300;
app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
