/**
 * Created by smougenot on 11/08/15.
 */
'use strict';
const
  Debug = require('debug'),
  debug = new Debug('device'),
  err = new Debug(' device:error')
;
require('colors');

module.exports = function (configPath) {
  // Where to find the devices configuration
  var path2Devices = configPath || __dirname + '/devices.json';
  debug('loading devices from %s', path2Devices);

  var res = {

    // Load devices definitions
    devices: require(path2Devices),

    /**
     * Get config for the device
     * @param name the device name
     */
    getDevice: function (name) {
      debug('Looking for device %s'.blue, name);
      var myDevice = this.devices[name];
      if (typeof myDevice === 'undefined') {
        // raise error
        err('Device.js : Device not found %s'.red, name);
      }
      return myDevice;
    },

    /**
     * Add/Update a device definition (into persistent layer)
     * @param deviceDef
     */
    setDevice: function (deviceDef) {
      err('setDevice not defined : %s'.red, JSON.stringify(deviceDef, null, 4));
    }
  };
  debug('Devices : %s', JSON.stringify(res.devices, null, 4));
  return res;
};
