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
var FoodItem = (function () {
    function FoodItem() {
    }
    return FoodItem;
}());
exports.FoodItem = FoodItem;
var food = (function () {
    function food() {
        this.fooditems = FOODITEMS;
        // During first load store array in session.
        // Every consecutive load read from the session and not the array.
        if (sessionStorage.getItem("key") == null) {
            sessionStorage.setItem("key", JSON.stringify(this.fooditems));
        }
        this.items = JSON.parse(sessionStorage.getItem("key"));
    }
    return food;
}());
food = __decorate([
    core_1.Component({
        selector: "HW2",
        templateUrl: "./home.html"
    }),
    __metadata("design:paramtypes", [])
], food);
exports.food = food;
var FOODITEMS = [
    { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 KG", qty: 6 },
    { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 KG", qty: 14 },
    { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 KG", qty: 20 },
    { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 KG", qty: 8 }
];
//# sourceMappingURL=app.FoodItem.js.map