"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = function () {
    function Cart() {
        _classCallCheck(this, Cart);

        this.x = 1;
    }

    _createClass(Cart, [{
        key: "say",
        value: function say() {}
    }, {
        key: "show",
        value: function show() {
            alert(this.x);
        }
    }]);

    return Cart;
}();

var obj = new Cart();
obj.show();

var Cart_child = function (_Cart) {
    _inherits(Cart_child, _Cart);

    function Cart_child() {
        _classCallCheck(this, Cart_child);

        return _possibleConstructorReturn(this, (Cart_child.__proto__ || Object.getPrototypeOf(Cart_child)).call(this));
    }

    _createClass(Cart_child, [{
        key: "sta",
        value: function sta() {
            alert(this.x);
        }
    }]);

    return Cart_child;
}(Cart);

var obj2 = new Cart_child();
obj2.sta();
