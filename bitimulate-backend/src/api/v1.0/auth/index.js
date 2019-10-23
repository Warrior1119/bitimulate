const Router = require('koa-router');

const auth = new Router();

auth.get('/', (ctx) => {
    ctx.body = 'router setting is finished'; 
});

module.exports = auth;