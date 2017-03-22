const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const read = require('node-readability');
const Article = require('./db').Article;

const host = process.env.HOST;
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/articles', (req, res, next) => {
	Article.all((err, articles) => {
    if (err) return next(err);
    res.send(articles);
	});
});

app.post('/articles', (req, res, next) => {
	const url = req.body.url;
	read(url, (err, result) => {
    if (err || !result) res.status(500).send('Error downloading article');
    const article = { title: result.title, content: result.content };
    Article.create(article, (err, art) => {
      if (err) return next(err);
      res.send('OK');
    });
	});
});

app.get('/articles/:id', (req, res, next) => {
  const id = req.params.id;
  console.log('Fetching: ', id);
  Article.find(id, (err, article) => {
  	res.send(article);
  });
});

app.delete('/articles/:id', (req, res, next) => {
  const id = req.params.id;
  console.log('Deleting: ', id);
  delete articles[id];
  res.send({ message: 'Deleted' });
});

app.listen(port, host);

module.exports = app;