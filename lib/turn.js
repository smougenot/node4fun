/**
 * Created by smougenot on 11/08/15.
 */
'use strict';
const
  device_config = require(__dirname +'/device.js')();

module.exports = function () {
  return {
    turnOn: function * (next){
        var name = this.params.name;
        console.log("turn on " + name);
        var myDevice = device_config.getDevice(name);
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
