'use strict';

const { createServer } = require('node:http');
const { handleRequest } = require('./app');

createServer(handleRequest).listen(Number(process.env.PORT || 3000), '0.0.0.0');
