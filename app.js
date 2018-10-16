const Restar = require('restar');
const timer = require('./middlewares/timer');
const userRouter = require('./routes/user');
const bookRouter = require('./routes/book');

const app = new Restar();

// middlewares
app.use(timer);
app.end(timer.timeEnd);

// routes
app.get('/hello', userRouter.hello);
app.get('/sleep', userRouter.sleep);
app.post('/login', userRouter.login);

app.get('/all', bookRouter.all);
app.get('/query', bookRouter.query);

app.catch(e => () => {
  return { code: -1, msg: 'oooop err' };
});

module.exports = app;
if (!module.parent) app.listen(3000);
