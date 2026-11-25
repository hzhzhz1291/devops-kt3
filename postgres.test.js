'use strict';

const { Client } = require('pg');

const postgresTest = process.env.DATABASE_URL ? test : test.skip;
postgresTest('the PostgreSQL service accepts a connection', async () => {
  const client = new Client({ connectionString: process.env.DATABASE_URL, connectionTimeoutMillis: 4000 });
  await client.connect();
  try {
    const result = await client.query('SELECT 1 AS value');
    expect(result.rows).toEqual([{ value: 1 }]);
  } finally {
    await client.end();
  }
});
