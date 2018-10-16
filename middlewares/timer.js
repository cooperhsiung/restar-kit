// better to try [response-time](https://github.com/expressjs/response-time)

module.exports = (req, res) => {
  req.startAt = Date.now();
};

module.exports.timeEnd = (req, res) => {
  res.setHeader('X-Response-Time', `${Date.now() - req.startAt}ms`);
};
