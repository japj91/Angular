"use strict";
var router_1 = require("@angular/router");
var app_FoodItem_1 = require("./app.FoodItem");
var app_detail_1 = require("./app.detail");
var app_home_1 = require("./app.home");
var appRoutes = [
    { path: 'page-a', component: app_FoodItem_1.food },
    { path: 'page-b/:id', component: app_detail_1.details },
    { path: 'about', component: app_home_1.about },
    { path: '', redirectTo: 'page-a', pathMatch: 'full' },
    { path: '**', component: app_FoodItem_1.food }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
// Set a page like page-a then set what component you want to send with it
/**
 *
 */ 
//# sourceMappingURL=app.routing.js.map