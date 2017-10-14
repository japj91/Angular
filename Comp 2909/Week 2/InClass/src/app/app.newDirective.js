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
// Define second directive.
var NewDirective = (function () {
    function NewDirective() {
    }
    return NewDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NewDirective.prototype, "lastName", void 0);
NewDirective = __decorate([
    core_1.Component({
        // Selector uses lower case with hyphens.
        selector: 'second-directive',
        template: "<h3>This is the second directive!</h3>{{lastName}}\n               \n               <test3 [fullName]=\"value\" ></test3>\n               Input for third Directive: <input [(ngModel)]=\"value\">"
    })
], NewDirective);
exports.NewDirective = NewDirective;
//# sourceMappingURL=app.newDirective.js.map