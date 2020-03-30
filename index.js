const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('body-parser');

const router = new Router();
const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8888);

router
  .get('/', async (ctx, next) => {
    ctx.body = 'hello, koa';
    ctx.status = 200;
    await next();
  })