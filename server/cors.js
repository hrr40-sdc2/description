var cors = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};

module.exports = (req, res, next) => {
  res.set(cors);

  // Send response on OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};