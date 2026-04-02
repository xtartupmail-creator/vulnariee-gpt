const http = require('http');
const url = require('url');
const { loadScenarios } = require('./scenario-registry');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 3000);

function json(res, statusCode, body) {
  const payload = JSON.stringify(body, null, 2);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  });
  res.end(payload);
}

function html(res, statusCode, body) {
  res.writeHead(statusCode, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': Buffer.byteLength(body)
  });
  res.end(body);
}

function renderHome(scenarios) {
  const items = scenarios
    .map((s) => `<li><strong>${s.name}</strong> <code>${s.id}</code> (${s.category}) - ${s.testCaseCount} test cases</li>`)
    .join('\n');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Vulnariee Benchmark Lab</title>
  <style>
    body { font-family: sans-serif; max-width: 960px; margin: 2rem auto; padding: 0 1rem; }
    code { background: #f1f1f1; padding: 0.1rem 0.3rem; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Vulnariee Benchmark Lab (Base)</h1>
  <p>Local-only scenario index for authorized security benchmarking.</p>
  <h2>Loaded scenarios</h2>
  <ul>${items || '<li>No scenarios yet.</li>'}</ul>
  <p>API: <code>GET /api/scenarios</code> and <code>GET /api/scenarios/:id</code></p>
</body>
</html>`;
}

const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url, true);
  const scenarios = loadScenarios();

  if (req.method === 'GET' && parsed.pathname === '/') {
    return html(res, 200, renderHome(scenarios));
  }

  if (req.method === 'GET' && parsed.pathname === '/healthz') {
    return json(res, 200, { ok: true, service: 'vulnariee-benchmark-lab' });
  }

  if (req.method === 'GET' && parsed.pathname === '/api/scenarios') {
    return json(
      res,
      200,
      scenarios.map((s) => ({
        id: s.id,
        name: s.name,
        category: s.category,
        difficulty: s.difficulty,
        testCaseCount: s.testCaseCount,
        validation: s.validation
      }))
    );
  }

  if (req.method === 'GET' && parsed.pathname.startsWith('/api/scenarios/')) {
    const id = parsed.pathname.split('/').pop();
    const scenario = scenarios.find((s) => s.id === id);

    if (!scenario) {
      return json(res, 404, { error: 'scenario_not_found' });
    }

    return json(res, 200, {
      id: scenario.id,
      name: scenario.name,
      category: scenario.category,
      difficulty: scenario.difficulty,
      notes: scenario.notes,
      testCases: scenario.testCases,
      validation: scenario.validation
    });
  }

  if (parsed.pathname.startsWith('/challenge/')) {
    const id = parsed.pathname.split('/').pop();
    const scenario = scenarios.find((s) => s.id === id);
    if (!scenario || typeof scenario.handler !== 'function') {
      return json(res, 404, { error: 'challenge_handler_not_found' });
    }

    return scenario.handler({ req, res, parsed });
  }

  return json(res, 404, { error: 'not_found' });
});

server.listen(PORT, HOST, () => {
  console.log(`Vulnariee Benchmark Lab listening on http://${HOST}:${PORT}`);
});
