/**
 * Created by smougenot on 11/08/15.
 */
'use strict';
require('colors')
const
  debug = require('debug')('turn')
  ;

module.exports =
  /**
   * @param device_config access to devices spécifications
   * **/
  function (device_config) {
    debug('devices %s', JSON.stringify(device_config, null, 4));
    return {
    devices: device_config,
    turnOn: function * (next){
        var name = this.params.name;
        debug("turn on %s".blue, name);
        var myDevice = devices.getDevice(name);
        if (typeof myDevice === 'undefined') {
          // raise error
          console.error("Device not found " + name);
          this.status = 404;
        } else {
          this.body = "Turn on device " + device;
        }
      }
    ,

    trace: function *(next){
      var name = this.params.name;
      console.log("turnOn " + name);
      this.body = "Turn on device " + name;
      return;
    }
  }
}
;
