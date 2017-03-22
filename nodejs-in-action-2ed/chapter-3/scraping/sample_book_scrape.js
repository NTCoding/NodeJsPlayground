const cheerio = require('cheerio');
const fs = require('fs');

fs.readFile('./sample.html', (err, data) => {
  const $ = cheerio.load(data);

  const book = {
    title: $('.book h2').text(),
    author: $('.book h3').text(),
    description: $('.book p').text()
  };

  console.log(book);
});