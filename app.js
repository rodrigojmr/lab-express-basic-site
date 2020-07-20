const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/about', (request, response) => {
  // response.send('Olá mundo');
  response.sendFile(__dirname + '/views/about.html');
});
app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery.html');
});
app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});
app.get('*', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.listen(3000);
