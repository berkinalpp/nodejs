const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = '<h1>Welcome to the index page </h1>'
});

router.get('/about', (ctx) => {
    ctx.body = '<h1>Welcome to the about page </h1>'
  });

  router.get('/contact', (ctx) => {
    ctx.body = '<h1>Welcome to the contact page </h1>'
  });

app.use(router.routes())

  app.listen(3000,() => {
      console.log('Server running on 3000 port')
  })