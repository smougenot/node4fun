/**
 * Created by smougenot on 11/08/15.
 */
'use strict';
require('colors');

const
  Debug = require('debug'),
  debug = new Debug('turn'),
  err = new Debug('turn:error')
  ;

module.exports =
  /**
   * @param device_config access to devices spécifications
   * **/
  function (device_config) {
    debug('devices %s', JSON.stringify(device_config, null, 4));
    return {
      devices: device_config,
      turnOn: function * (next) {
        var name = this.params.name;
        debug('turn on %s'.blue, name);
        var myDevice = this.devices.getDevice(name);
        if (typeof myDevice === 'undefined') {
          // raise error
          err('TurnOn : device not found %s'.red, name);
          this.status = 404;
        } else {
          this.body = 'Turn on device ' + myDevice;
        }
        yield next;
      }
    };
  };
