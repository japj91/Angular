"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var addition = (function () {
    function addition() {
    }
    addition.prototype.calculate = function () {
        this.total = eval(Number(this.var2) + this.operator + Number(this.var3));
    };
    addition.prototype.rounded = function () {
        return Math.round(this.total * 100) / 100;
    };
    addition.prototype.onSubmit = function (myForm) {
        myForm.reset();
    };
    return addition;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], addition.prototype, "operator", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], addition.prototype, "type", void 0);
addition = __decorate([
    core_1.Component({
        selector: "add",
        templateUrl: "./addition.html"
    })
], addition);
exports.addition = addition;
//# sourceMappingURL=app.add.js.map