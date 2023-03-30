"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(P_Patas) {
        this.patas = P_Patas;
    }
    Animal.prototype.getPatas = function () { return this.patas; };
    Animal.prototype.setPatas = function (patas) { this.patas = patas; };
    return Animal;
}());
exports.Animal = Animal;
