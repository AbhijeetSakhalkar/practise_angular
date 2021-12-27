"use strict";
exports.__esModule = true;
exports.Point3 = void 0;
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log("Inside Point3 class and draw method");
        console.log("X: " + this.x, "Y: " + this.y);
    };
    return Point3;
}());
exports.Point3 = Point3;
