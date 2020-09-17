const Koa = require('koa');
const app = new Koa();

// Add date method to context
app.context.date = Date();

//response
app.use(ctx => { //ctx has req and res built in
  //use state
  ctx.state.user = 'Stephanie Raymos';
  //request object usage
  let from = ctx.request.origin //Where this request is originating from (localhost:3000)
  let method = ctx.request.method //This is a get request
  //print out date
  ctx.body = `Hello ${ctx.state.user} on ${ctx.date}`;
  console.log(from);
  console.log(method);
});

app.listen(3000);