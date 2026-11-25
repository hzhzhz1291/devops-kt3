'use strict';

const { handleRequest } = require('./app');

function get(path) {
  const response = { statusCode: 200, setHeader: jest.fn(), end: jest.fn() };
  handleRequest({ method: 'GET', url: path }, response);
  return response;
}

test('GET / returns the KT3 title', () => {
  const response = get('/');
  expect(response.statusCode).toBe(200);
  expect(response.end).toHaveBeenCalledWith('KT3 App');
});

test('GET /health returns JSON status ok', () => {
  const response = get('/health');
  expect(response.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
  expect(JSON.parse(response.end.mock.calls[0][0])).toEqual({ status: 'ok' });
});

test('an unknown route returns 404', () => {
  expect(get('/missing').statusCode).toBe(404);
});
