module.exports = {
  all: () => {
    return [{ id: 1, name: 'nodejs in action' }];
  },
  query: async ({ query }) => {
    if (!query.id) {
      return { code: -2, msg: 'id is required' };
    }
    return { code: 0, name: 'express in action' };
  }
};
