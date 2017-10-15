"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by japjohal on 2017-10-14.
 */
/**
 * Created by japjohal on 2017-10-14.
 */
var core_1 = require("@angular/core");
var date = (function () {
    function date() {
        this.today = Date.now();
    }
    return date;
}());
date = __decorate([
    core_1.Component({
        selector: 'date',
        template: "<div class=\"date\">{{today | date}}</div>"
    })
], date);
exports.date = date;
//# sourceMappingURL=app.date.js.map