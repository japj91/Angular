"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var calculator = (function () {
    function calculator() {
        this.sym = "+";
        this.add = "Sum";
        this.minus = "-";
        this.subtract = "Difference";
        this.multiply = "*";
        this.product = "Product";
        this.divide = "/";
        this.Quotient = "Quotient";
    }
    return calculator;
}());
calculator = __decorate([
    core_1.Component({
        selector: "my-apps",
        template: " Angular Calculator\n               <br/>\n               <br>\n               <add [operator]=\"sym\" [type]=\"add\">   </add>\n               <add [operator]=\"minus\" [type]=\"subtract\"> </add>\n               <add [operator]=\"multiply\" [type]=\"product\"> </add>\n               <add [operator]=\"divide\" [type]=\"Quotient\"> </add>\n                "
    })
], calculator);
exports.calculator = calculator;
//# sourceMappingURL=app.holder.js.map