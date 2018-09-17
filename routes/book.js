module.exports = {
  all: () => {
    return [{ id: 1, name: "nodejs in action" }];
  },
  query: async () => {
    return { code: 0, name: "bob" };
  }
};
