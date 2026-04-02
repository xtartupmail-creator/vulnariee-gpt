const { loadScenarios } = require('../src/scenario-registry');

const scenarios = loadScenarios();

if (scenarios.length === 0) {
  console.error('No scenarios found.');
  process.exit(1);
}

let hasError = false;
for (const s of scenarios) {
  if (!s.validation.ok) {
    hasError = true;
    console.error(`[${s.id}] invalid: ${s.validation.problems.join('; ')}`);
  } else {
    console.log(`[${s.id}] valid (${s.testCaseCount} test cases)`);
  }
}

if (hasError) process.exit(1);
