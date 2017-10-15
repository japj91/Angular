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
var PageBComponent = (function () {
    function PageBComponent() {
    }
    PageBComponent.prototype.mychange = function (val) {
        sessionStorage.setItem("autosave", val);
        console.log(val); // updated value
    };
    PageBComponent.prototype.saveInfo = function (data) {
        var a = sessionStorage.setItem("value", data);
        console.log(a);
    };
    return PageBComponent;
}());
PageBComponent = __decorate([
    core_1.Component({
        template: "This is page b. \n    <input type=\"input\"  (ngModelChange)=\"mychange($event)\" [ngModel]=\"mymodel\">\n    <br>\n    Second Input<input type=\"input\"  (ngModelChange)=\"saveInfo($event)\" [ngModel]=\"model\">\n    "
    }),
    __metadata("design:paramtypes", [])
], PageBComponent);
exports.PageBComponent = PageBComponent;
//# sourceMappingURL=app.page-b.js.map