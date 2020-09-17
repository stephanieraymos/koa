const Koa = require('koa');
const app = new Koa();

// Add date method to context
app.context.date = Date();

//response
app.use(ctx => {
  //use state
  ctx.state.user = 'Stephanie Raymos';
  //print out date
  ctx.body = `Hello ${ctx.state.user} on ${ctx.date}`;
});

app.listen(3000);