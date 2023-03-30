"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Araña = void 0;
var animal_1 = require("./animal");
var Araña = /** @class */ (function (_super) {
    __extends(Araña, _super);
    function Araña(P_Patas) {
        return _super.call(this, P_Patas) || this;
    }
    Araña.prototype.comer = function () {
        console.log("La araña esta comiendo");
    };
    Araña.prototype.caminar = function (patas) {
        console.log("La araña esta caminando");
    };
    return Araña;
}(animal_1.Animal));
exports.Araña = Araña;
