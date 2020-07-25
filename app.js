const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials');

app.locals.title = 'Default title';

app.get('/style.css', (request, response) => {
  response.sendFile(__dirname + 'public/style.css');
});

app.get('/about', (request, response) => {
  response.render('about', {});
});
app.get('/gallery', (request, response) => {
  response.render('gallery', {});
});
app.get('/works', (request, response) => {
  response.render('works', {
    works: [
      {
        link: 'https://www.youtube.com/watch?v=C5qfKaVe89c',
        thumbnail: 'grief.jpg',
        thumbAlt: 'Grief, Loss, and Suicide',
        title: 'Grief, Loss, and Suicide',
        description:
          "After the passing of one of Alok's friends and someone who has been on Healthy Gamer multiple times, Dr. Alok talks honestly about grief, loss, and suicide."
      },
      {
        link: 'https://www.youtube.com/watch?v=dvq48pfJa9w&',
        thumbnail: 'meditation thumbnail.jpg',
        thumbAlt: 'Meditation video Thumbnail',
        title: 'What even is Meditation?',
        description: 'Dr. Alok explains in detail what meditation is'
      }
    ]
  });
});
app.get('*', (request, response) => {
  response.render('home', {});
});

app.listen(3000);
