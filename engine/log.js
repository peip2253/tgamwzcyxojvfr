/**
 * Created by Ben on 2017. 01. 10..
 */

'use strict';

const console_log = true;
const fs = require('fs');

/**
 * Log gyártása. Írja a logfájlba és kimenetre is.
 * Ha a kód kicsit stabilabb lesz a configba bekerül a console_log kapcsolgathatósága
 * @param input {string}
 */
var log = function (input) {
    input = (new Date()).toString() + ' # ' + input;

    fs.appendFile('../log.log', input + '\r\n', () => {});
    if (console_log) {
        console.log(input);
    }
};

module.exports = log;