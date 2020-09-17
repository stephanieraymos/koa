const Koa = require('koa');
const app = new Koa();

// Add date method to context
app.context.date = Date();
app.context.userData = {
  'first': 'Stephanie',
  'last': 'Raymos'
}

// //response
// app.use(ctx => { //ctx has req and res built in
//   //use state
//   ctx.state.user = 'Stephanie Raymos';
//   //request object usage
//   let from = ctx.request.origin //Where this request is originating from (localhost:3000)
//   let method = ctx.request.method //This is a get request
//   //print out date
//   //ctx.body = `Hello ${ctx.state.user} on ${ctx.date}`; //Response (Can use ctx.response.body or ctx.body)
//   ctx.body = `Hello ${ctx.userData.first} ${ctx.userData.last} on ${ctx.date}`; //Using context instead of state
//   //ctx.response.body = ctx.userData.first; //{rinting out first from userData object
//   console.log(from);
//   console.log(method);
// });

//response
app.use(ctx => {
  if (ctx.userData) {
    return ctx.response.body = ctx.userData
  } else {
    return ctx.throw(400, 'Data required')
  }


});

app.listen(3000);