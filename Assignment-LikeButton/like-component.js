"use strict";
exports.__esModule = true;
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likes, _isLiked) {
        this._likes = _likes;
        this._isLiked = _isLiked;
    }
    LikeComponent.prototype.onClick = function () {
        if (this._isLiked) {
            this._likes = this._likes - 1;
        }
        else {
            this._likes = this._likes + 1;
        }
        this._isLiked = !this._isLiked;
        console.log("likes: " + this._likes + " isLiked: " + this._isLiked);
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
