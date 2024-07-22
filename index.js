import { AESCipherJS } from "./encrypt.js";


// Example usage:
let secretKey = 'my_encryption_key';
let mydata = {
    "user": "e9234576452034348692345",
    "url": "/members/page.../...",
    "name": "한국장학재단",
    "checked": true,
    "amount": 324,
    "from": "node.js"
};
let aesCipher = new AESCipherJS(secretKey);

// Encrypt data
let encryptedData = aesCipher.encrypt(JSON.stringify(mydata));
console.log('Encrypted:');
console.log(encryptedData);
console.log();


// Decrypt data (using the encryptedData from above)
let decryptedData = aesCipher.decrypt(encryptedData);
console.log('Decrypted:');
console.log(JSON.parse(decryptedData));
console.log();



const encrypted2 = "2p1Oj4m4w0v0PwIle7y0OI+MsJDdAx1lNNMwLXbBWVz6MCpBDI7lD4cbqgmxKCvzWfGhKA0ffan185VZKsTBwLSv5cthV8zekiUMHhhfHtcJADpHYw260bCBp30pST16WuOR0Ihvc2WedjMuLLh0gcIvI9Y8tZPpOtv2VQsrBWBdfnnW0h6R2+aoKbR2WGD0Ktr4x3WCpPWGpkEAp173Pm4DLQP1ozlhJWsj+os6wX8=";

const decrypted2 = aesCipher.decrypt(encrypted2);
console.log("Decrypted from Python:");
console.log(JSON.parse(decrypted2));