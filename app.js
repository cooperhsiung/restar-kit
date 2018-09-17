const Restar = require("restar");
const timer = require("./middlewares/timer");
const userService = require("./services/user");
const bookService = require("./services/book");

const app = new Restar();

// middlewares
app.use(timer());

// routes
app.get("/hello", userService.hello);
app.get("/sleep", userService.sleep);

app.get("/all", bookService.all);
app.get("/query", bookService.query);

module.exports = app;
if (!module.parent) app.listen(3000);
