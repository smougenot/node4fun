/**
 * Created by smougenot on 11/08/15.
 */
'use strict';
const
  app = require('koa')(),
  router = require('koa-router')(),
  port = 3000,
  device = require(__dirname + '/device')(),
  turn = require(__dirname + '/turn')(device),
  Debug = require('debug'),
  debug = new Debug('app'),
  err = new Debug('app:error')
  ;

//Middleware: request logger
function *reqlogger(next){
  debug(
    '%s - %s %s',
    new Date().toISOString(),
    /*jshint validthis: true */
    this.req.method,
    this.req.url);
  yield next;
}
app.use(reqlogger);

// Routage
router.get('/turn/on/:name', turn.turnOn);

app
  .use(router.routes())
  .use(router.allowedMethods());

// Default
app.use(function * (next) {
  this.body = 'Have fun with gpio';
  yield next;
});

app.on('error', function (err) {
  err('server error : %s', err);
});

app.listen(port);
debug('Listening on port %s'.cyan, port);
