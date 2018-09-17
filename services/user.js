module.exports = {
  hello: () => {
    return "hello";
  },
  sleep: async (req, res) => {
    await sleep();
    res.timeEnd();
    return "sleep 1 s";
  },
  login: async (req, res) => {
    return { code: 0, name: "bob" };
  }
};

function sleep() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}
