/**
 * Created by smougenot on 11/08/15.
 */
'use strict';

module.exports = function () {
  var devices_config = {};
  var devices = {};
  devices['light1'] = {
    name: 'light1',
    connector: 'gpio',
    actions: ['on', 'off']
  };

  /**
   * Get config for the device
   * @param name the device name
   */
  devices_config.getDevice = function (name) {

    var myDevice = devices[name];
    if (typeof myDevice === 'undefined') {
      // raise error
      console.error("Device not found " + name);
    }
    return myDevice;
  }
  return devices_config;
};
