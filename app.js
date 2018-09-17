const Restar = require("restar");
const timer = require("./middlewares/timer");
const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");

const app = new Restar();

// middlewares
app.use(timer());

// routes
app.get("/hello", userRouter.hello);
app.get("/sleep", userRouter.sleep);

app.get("/all", bookRouter.all);
app.get("/query", bookRouter.query);

module.exports = app;
if (!module.parent) app.listen(3000);
