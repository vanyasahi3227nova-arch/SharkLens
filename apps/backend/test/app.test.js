import test from 'node:test';
import assert from 'node:assert/strict';
import { buildApp } from '../src/app.js';

const app = buildApp();

function getServer() {
  return app.listen(0);
}

test('GET /health returns service status', async () => {
  const server = getServer();
  const port = server.address().port;

  const response = await fetch(`http://127.0.0.1:${port}/health`);
  const json = await response.json();

  assert.equal(response.status, 200);
  assert.equal(json.status, 'ok');

  server.close();
});

test('POST /api/policy/assessment validates payload', async () => {
  const server = getServer();
  const port = server.address().port;

  const response = await fetch(`http://127.0.0.1:${port}/api/policy/assessment`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ organizationName: 'A' })
  });

  assert.equal(response.status, 400);
  server.close();
});
