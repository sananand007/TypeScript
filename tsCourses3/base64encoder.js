"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const EQUALS = 64;
function base64encode(input) {
    var output = "";
    var i = 0;
    while (i < input.length) {
        // process 3 8-bit number at a time
        let chr1 = input.charCodeAt(i++);
        let chr2 = input.charCodeAt(i++);
        let chr3 = input.charCodeAt(i++);
        // groups of 4 bit numbers from 3 8-bit numbers (ASCII)
        let enc1 = chr1 >> 2; //right shift , dropping the last 2 bits
        let enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        let enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        let enc4 = chr3 & 63;
        // handle padding
        // if 2nd (and 3rd) octet is empty, zero out the last 2 6-bit numbers
        if (isNaN(chr2)) {
            enc3 = enc4 = EQUALS;
        }
        // if 3rd octet is empty, zero out last 6-bit number
        else if (isNaN(chr3)) {
            enc4 = EQUALS;
        }
        // finally, concatenate the character sequence
        output = output
            + KEY_STRING.charAt(enc1)
            + KEY_STRING.charAt(enc2)
            + KEY_STRING.charAt(enc3)
            + KEY_STRING.charAt(enc4);
    }
    return output;
}
exports.base64encode = base64encode;
