const fs = require('fs');
const path = require('path');
const { SCENARIOS_DIR } = require('../src/scenario-registry');

function parseArg(name, fallback = null) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1 || idx + 1 >= process.argv.length) return fallback;
  return process.argv[idx + 1];
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function buildTestCases() {
  return Array.from({ length: 20 }).map((_, i) => ({
    id: `TC-${String(i + 1).padStart(2, '0')}`,
    title: `Advanced case ${i + 1}`,
    objective: 'Describe the complex edge condition being tested.',
    prerequisites: ['Define required state or seed data'],
    steps: ['Step 1', 'Step 2', 'Step 3'],
    expectedSignals: ['Expected telemetry and side effects'],
    complexity: 'advanced',
    tags: ['race-condition', 'multi-step', 'state-confusion']
  }));
}

function main() {
  const id = parseArg('id');
  const name = parseArg('name');
  const category = parseArg('category', 'web');

  if (!id || !name) {
    console.error('Usage: npm run new:scenario -- --id <id> --name <name> [--category <category>]');
    process.exit(1);
  }

  ensureDir(SCENARIOS_DIR);
  const dir = path.join(SCENARIOS_DIR, id);
  ensureDir(dir);

  const metadata = {
    id,
    name,
    category,
    difficulty: 'advanced',
    notes: 'Fill in the scenario-specific details and safety boundaries.'
  };

  const handlerTemplate = `module.exports = function handler({ res }) {
  res.writeHead(501, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({
    error: 'not_implemented',
    message: 'Scenario handler is not implemented yet.'
  }));
};
`;

  fs.writeFileSync(path.join(dir, 'metadata.json'), JSON.stringify(metadata, null, 2));
  fs.writeFileSync(path.join(dir, 'test-cases.json'), JSON.stringify(buildTestCases(), null, 2));
  fs.writeFileSync(path.join(dir, 'handler.js'), handlerTemplate);

  console.log(`Scenario scaffold created at ${dir}`);
}

main();
