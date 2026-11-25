'use strict';

function handleRequest(request, response) {
  if (request.method === 'GET' && request.url === '/') {
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end('KT3 App');
  } else if (request.method === 'GET' && request.url === '/health') {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ status: 'ok' }));
  } else {
    response.statusCode = 404;
    response.end('Not Found');
  }
}

module.exports = { handleRequest };
