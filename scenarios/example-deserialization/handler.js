module.exports = function handler({ res }) {
  res.writeHead(501, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(
    JSON.stringify({
      error: 'placeholder_scenario',
      message: 'Replace this handler with the specific vulnerability workflow.'
    })
  );
};
