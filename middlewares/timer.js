// better to try [response-time](https://github.com/expressjs/response-time)
module.exports = (opts = {}) => (req, res) => {
  req.time = Date.now();
  res.timeEnd = function() {
    res.setHeader("X-Response-Time", `${Date.now() - req.time}ms`);
  };
};
