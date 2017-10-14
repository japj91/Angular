"use strict";
// This is the service.
var MyDataService = (function () {
    // Frist thing that runs is constructor
    function MyDataService() {
        // We are referencing a model at the class level
        this.names = ['John', 'Mary', 'Joan'];
        this.myName = "jap";
    }
    // this is a function notice how it doesn’t tell u what its returning. It can also return different types of data
    MyDataService.prototype.getNames = function () {
        return this.names;
    };
    MyDataService.prototype.getMyName = function () {
        return this.myName;
    };
    return MyDataService;
}());
exports.MyDataService = MyDataService;
//# sourceMappingURL=app.myDataService.js.map