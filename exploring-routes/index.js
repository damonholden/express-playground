const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/', (req, res) => res.send('Got a POST request'));

app.put('/user', (req, res) => res.send('Got a PUT request at /user'));

app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'));

app.listen(port, () => {
  console.log(`app listening on port ${port}.`);
  console.log(`__dirname:`, __dirname);
});
