module.exports = function handler({ res }) {
  res.writeHead(501, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({
    error: 'scenario_not_implemented',
    message: 'Placeholder scenario. Implement only in isolated, authorized environments.'
  }));
};
