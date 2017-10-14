"use strict";
var CeluisToFarenhit = (function () {
    function CeluisToFarenhit() {
    }
    CeluisToFarenhit.prototype.convert = function (cel) {
        cel *= 9;
        cel /= 5;
        cel += 32;
        this.celusis = cel;
        return this.celusis;
    };
    return CeluisToFarenhit;
}());
exports.CeluisToFarenhit = CeluisToFarenhit;
//# sourceMappingURL=app.farenhitService.js.map