import { AESCipherJS } from "./encrypt.js";


// Example usage:
let secretKey = 'my_encryption_key';
let mydata = {
    "name": "node user 03",
    "age": 30,
    "is_admin": true,
    "personal_info": { "ssn": "123123", "phone": "456456" },
    "tags": ["tag1", "tag2", "tag3"],
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