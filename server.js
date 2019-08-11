const express = require('express');
const helmet = require('helmet');

const userRouter = require('./users/userRouter.js');
const wordListRouter = require('./wordLists/wordListRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/users', userRouter);
server.use('/api/wordLists', wordListRouter);

module.exports = server;
