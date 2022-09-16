'use strict';

const auth = () => {
  const vendorId = XXXX; // ここにVendor ID
  const productId = XXXX; // ここにProduct ID
  const serialNumber = 'XXXXXXXX'; // ここにSerial Number
  navigator.usb.requestDevice({ 'filters': [
      { 'vendorId': vendorId, 'productId': productId }
    ]
  }).then(device => {
    if (device.serialNumber === serialNumber) {
      console.log('success!');
      login();
      return device.open;
    } else {
      console.log('false!');
      alert('認証に失敗しました');
    }
  }).catch(error => {
    console.log(error);
  });
}