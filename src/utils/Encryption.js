import CryptoJS from 'crypto-js';
import {secretKey} from './secretKey';

const encryptMethod=()=> {
    return 'AES-256-CBC';
}
const encryptMethodLengthFunction=()=> {
    var encryptMethodString = encryptMethod();
    // get only number from string.
    var aesNumber = encryptMethodString.match(/\d+/)[0];
    return parseInt(aesNumber);
}

/** decrption function */
export const DecryptData = (encryptedBase64,doJsonParse=true, key='@dufatty@') => {
    const CryptoJS = require('crypto-js');
    var json = JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encryptedBase64)));
 
    var salt = CryptoJS.enc.Hex.parse(json.salt);
    var iv = CryptoJS.enc.Hex.parse(json.iv);

    var encrypted = json.ciphertext;// no need to base64 decode.

    var iterations = parseInt(json.iterations);
    if (iterations <= 0) {
        iterations = 999;
    }
    var encryptMethodLength = (encryptMethodLengthFunction()/4);// example: AES number is 256 / 4 = 64
    var hashKey = CryptoJS.PBKDF2(key, salt, {'hasher': CryptoJS.algo.SHA512, 'keySize': (encryptMethodLength/8), 'iterations': iterations});

    var decrypted = CryptoJS.AES.decrypt(encrypted, hashKey, {'mode': CryptoJS.mode.CBC, 'iv': iv});

    if(doJsonParse){
        return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));     
    }
    return decrypted.toString(CryptoJS.enc.Utf8); 
}

/** encryption function */
export  const EncryptData = (string,key='@dufatty@')=>{
    
        const CryptoJS = require('crypto-js');
        var iv = CryptoJS.lib.WordArray.random(16);// the reason to be 16, please read on `encryptMethod` property. 
        var salt = CryptoJS.lib.WordArray.random(256);
        var iterations = 999;
        var encryptMethodLength = (encryptMethodLengthFunction()/4);// example: AES number is 256 / 4 = 64
        var hashKey = CryptoJS.PBKDF2(key, salt, {'hasher': CryptoJS.algo.SHA512, 'keySize': (encryptMethodLength/8), 'iterations': iterations}); 
        var encrypted = CryptoJS.AES.encrypt(string, hashKey, {'mode': CryptoJS.mode.CBC, 'iv': iv});
        var encryptedString = CryptoJS.enc.Base64.stringify(encrypted.ciphertext); 
        var output = {
            'ciphertext': encryptedString,
            'iv': CryptoJS.enc.Hex.stringify(iv),
            'salt': CryptoJS.enc.Hex.stringify(salt),
            'iterations': iterations
        }; 
    //  console.log(JSON.stringify(output));
        return( CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(output))));
     
 
  }