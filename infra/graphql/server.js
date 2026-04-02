const http = require('http');

const host = '0.0.0.0';
const port = Number(process.env.PORT || 4000);

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/graphql') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
      res.end(
        JSON.stringify({
          data: { message: 'GraphQL target placeholder for local benchmark environment' },
          receivedBytes: body.length
        })
      );
    });
    return;
  }

  if (req.method === 'GET' && req.url === '/healthz') {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ ok: true, service: 'graphql-target' }));
    return;
  }

  res.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: 'not_found' }));
});

server.listen(port, host, () => {
  console.log(`graphql-target listening on http://${host}:${port}`);
});
