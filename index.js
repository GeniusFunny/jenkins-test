// const Koa = require('koa');
// const Router = require('koa-router');

// const router = new Router();
// const app = new Koa();

// app
//   .use(router.routes())
//   .use(router.allowedMethods())
//   .listen(8888);

// router
//   .get('/', async (ctx, next) => {
//     ctx.body = 'hello, koa';
//     ctx.status = 200;
//     await next();
//   })
  
const http = require('http');
const os = require('os');


console.log('Yang server is starting');

const handler = (req, res) => {
  console.log('received request from ' + req.connection.remoteAddress);
  res.writeHead(200);
  res.end('You have hit v2 ' + os.hostname() + '\n');
}

const server = http.createServer(handler);
server.listen(8080);