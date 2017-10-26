const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

function getRandomSeconds(max) {
  return Math.floor(Math.random() * max * 1000);
}

server.use(function (req, res, next) {
  setTimeout(next, getRandomSeconds(5));
});

server.use(middlewares);
server.use(router);

server.get('/phones', function (req, res) {
  res.jsonp(res);
});

server.listen(3000, () => {
  console.log('JSON Server is running');
});