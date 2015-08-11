/**
 * Created by smougenot on 11/08/15.
 */
'use strict';
const
  app = require('koa')(),
  router = require('koa-router')(),
  port = 3000,
  turn = require(__dirname +'/turn.js')(),
  debug = require('debug')('app')
  ;

//Middleware: request logger
function *reqlogger(next){
  debug(
    '%s - %s %s',
    new Date().toISOString(),
    this.req.method,
    this.req.url);
  yield next;
}
app.use(reqlogger);

// Routage
router.get('/turn/on/:name', turn.turnOn)


app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(function * (next){
  this.body = 'Have fun with gpio';
});

app.on('error', function (err) {
  log.error('server error', err);
});

app.listen(port);
console.log("Listening on port "+port);
