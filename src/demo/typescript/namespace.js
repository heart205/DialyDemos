"use strict";
/**
 * @author heart
 * @description 命名空间
 * @Date 2022-02-25
 */
var Utity;
(function (Utity) {
    function log() {
        console.log('123');
    }
    Utity.log = log;
})(Utity || (Utity = {}));
