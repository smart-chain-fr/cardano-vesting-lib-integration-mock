const b = require("@dcspark/cardano-multiplatform-lib-nodejs");


const bech32 = "addr_test1wrs00w6dym5hm0elrprg8zfextvrycn3c7gpkw4ssdglnucqt7zd6";
const addr = b.Address.from_bech32(bech32);
const byte = addr.to_bytes();
const hex = byte.buffer;
const a = Buffer.from(hex);
const hexstring = a.toString('hex');
console.log(bech32);
//console.log(addr.payment_cred().to_keyhash().to_hex());
console.log(addr.header())
console.log(byte);
console.log(hex);
console.log(a);
console.log(hexstring);