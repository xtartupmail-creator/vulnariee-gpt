const fs = require('fs');
const path = require('path');

const SCENARIOS_DIR = path.join(__dirname, '..', 'scenarios');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function isValidTestCount(testCases) {
  return Array.isArray(testCases) && testCases.length >= 15 && testCases.length <= 25;
}

function loadScenarioFolder(folderPath) {
  const metadataPath = path.join(folderPath, 'metadata.json');
  const testCasesPath = path.join(folderPath, 'test-cases.json');
  const handlerPath = path.join(folderPath, 'handler.js');

  if (!fs.existsSync(metadataPath) || !fs.existsSync(testCasesPath) || !fs.existsSync(handlerPath)) {
    return null;
  }

  const metadata = readJson(metadataPath);
  const testCases = readJson(testCasesPath);

  const problems = [];
  if (!metadata.id || !metadata.name || !metadata.category) {
    problems.push('metadata must include id, name, and category');
  }
  if (!isValidTestCount(testCases)) {
    problems.push('test-cases.json must contain between 15 and 25 test cases');
  }

  let handler = null;
  try {
    handler = require(handlerPath);
  } catch (err) {
    problems.push(`handler.js could not be loaded: ${err.message}`);
  }

  return {
    ...metadata,
    testCaseCount: Array.isArray(testCases) ? testCases.length : 0,
    testCases,
    handler,
    validation: {
      ok: problems.length === 0,
      problems
    }
  };
}

function loadScenarios() {
  if (!fs.existsSync(SCENARIOS_DIR)) {
    return [];
  }

  const entries = fs.readdirSync(SCENARIOS_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => loadScenarioFolder(path.join(SCENARIOS_DIR, entry.name)))
    .filter(Boolean)
    .sort((a, b) => a.id.localeCompare(b.id));
}

module.exports = {
  loadScenarios,
  isValidTestCount,
  SCENARIOS_DIR
};
