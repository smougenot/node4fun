'use strict';
import assert from 'assert';

// load device module with config
const device = require('../lib/device')(__dirname + '/deviceTest.conf.json');

describe('module-2:Device', function () {
  it('Devices should be loaded!', function () {
    assert(typeof device !== 'undefined', 'expecting module device to be there');
    assert(typeof device.devices !== 'undefined', 'expecting devices to be loaded');
  });
  it('Devices should find device name dev1', function(){
    var dev1 = device.getDevice('dev1');
      assert(typeof dev1 !== 'undefined', 'expecting module device to know dev1');
  });
});
