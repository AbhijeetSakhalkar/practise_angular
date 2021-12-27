"use strict";
exports.__esModule = true;
var Point_1 = require("./Point");
var drawPoint1 = function (point) {
    console.log("Inside drawPoint");
    console.log(point.a);
    console.log(point.b);
};
drawPoint1({
    a: 10,
    b: 15
});
var drawPoint2 = function (point) {
    console.log("Inside drawPoint2");
    console.log(point.x);
    console.log(point.y);
};
drawPoint2({
    x: 12,
    y: 17
});
var drawPoint3 = function (point) {
    console.log("Inside drawPoint3");
    console.log(point.x);
    console.log(point.y);
};
var getDistance = function (point1, point2) {
    //
};
drawPoint3({
    x: 14,
    y: 19
});
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw = function () {
        console.log("inside class draw: x: " + this.x + " y: " + this.y);
    };
    Point2.prototype.getDistance = function () {
        console.log("inside class getDistance: x: " + this.x + " y: " + this.y);
    };
    return Point2;
}());
var point = new Point2;
point.x = 1;
point.y = 2;
point.getDistance();
point.draw();
var PointWithConstructor = /** @class */ (function () {
    function PointWithConstructor(x, y) {
        this.x = x;
        this.y = y;
    }
    PointWithConstructor.prototype.drawForConstructor = function () {
        console.log("inside class drawForConstructor: x: " + this.x + " y: " + this.y);
    };
    PointWithConstructor.prototype.getDistanceForConstructor = function () {
        console.log("inside class getDistanceForConstructor: x: " + this.x + " y: " + this.y);
    };
    return PointWithConstructor;
}());
var pointForConst = new PointWithConstructor(5, 6);
pointForConst.drawForConstructor();
pointForConst.getDistanceForConstructor();
var PointWithConstructor2 = /** @class */ (function () {
    function PointWithConstructor2(x, y) {
        this.x = x;
        this.y = y;
    }
    PointWithConstructor2.prototype.drawForConstructor = function () {
        console.log("inside class PointWithConstructor2: drawForConstructor: x: " + this.x + " y: " + this.y);
    };
    PointWithConstructor2.prototype.getDistanceForConstructor = function () {
        console.log("inside class PointWithConstructor2: getDistanceForConstructor: x: " + this.x + " y: " + this.y);
    };
    PointWithConstructor2.prototype.getX = function () {
        return this.x;
    };
    PointWithConstructor2.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("value can not be less than 0");
        }
        this.x = value;
    };
    Object.defineProperty(PointWithConstructor2.prototype, "X", {
        // one more way for getter setter
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value can not be less than 0");
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return PointWithConstructor2;
}());
var pointForConst2 = new PointWithConstructor2(5, 6);
pointForConst2.drawForConstructor();
pointForConst2.getDistanceForConstructor();
pointForConst2.setX(1);
pointForConst2.drawForConstructor();
pointForConst2.X = 3;
pointForConst2.drawForConstructor();
var point3 = new Point_1.Point3(1, 2);
point3.draw();
