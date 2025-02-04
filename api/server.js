const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Твой файл с данными
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;