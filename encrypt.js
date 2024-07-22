import CryptoJS from "crypto-js";


export class AESCipherJS {
    constructor(key) {
        this.key = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(key));
    }

    encrypt(plainText) {
        const iv = CryptoJS.lib.WordArray.random(16);
        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText), this.key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return CryptoJS.enc.Base64.stringify(iv.concat(encrypted.ciphertext));
    }

    decrypt(cipherText) {
        const cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(cipherText)
        });
        const iv = CryptoJS.lib.WordArray.create(cipherParams.ciphertext.words.slice(0, 4));
        const encryptedText = CryptoJS.lib.WordArray.create(cipherParams.ciphertext.words.slice(4));

        const decrypted = CryptoJS.AES.decrypt({ ciphertext: encryptedText }, this.key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}
