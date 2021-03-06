"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PhoneConversion = (function () {
    function PhoneConversion() {
    }
    PhoneConversion.prototype.transform = function (number) {
        var pat = /^[0-9]*$/;
        console.log(number.substring(0, 3));
        if (pat.test(number) == true) {
            return "(" + number.substring(0, 3) + ")-" + number.substring(3, 6) + "-" + number.substring(6, number.length);
        }
        else {
            return " Numbers not entered";
        }
    };
    return PhoneConversion;
}());
PhoneConversion = __decorate([
    core_1.Pipe({ name: 'phoneConversion' })
], PhoneConversion);
exports.PhoneConversion = PhoneConversion;
//# sourceMappingURL=app.phonePipe.js.map