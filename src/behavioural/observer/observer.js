var InputObserver = /** @class */ (function () {
    function InputObserver(element) {
        this.element = element;
        this.observers = [];
    }
    InputObserver.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this.observers.includes(observer)) {
                _this.observers.push(observer);
            }
        });
    };
    InputObserver.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    };
    InputObserver.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObserver;
}());
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        this.element.innerText = observable.element.value;
    };
    return ParagraphObserver;
}());
// Cliente code
function makeInput() {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var p = document.createElement('p');
    document.body.appendChild(p);
    p.innerText = 'Texto inicial';
    return p;
}
var input = new InputObserver(makeInput());
var p1 = new ParagraphObserver(makeParagraph());
input.subscribe(p1);
input.element.addEventListener('keyup', function () {
    input.notify();
});
