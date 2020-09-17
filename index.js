const Koa = require('koa');
const app = new Koa();

// Add date method to context
app.context.date = Date();

//response
app.use(ctx => {
  //print out date
  ctx.body = `Hello on ${ctx.date}`;
});

app.listen(3000);