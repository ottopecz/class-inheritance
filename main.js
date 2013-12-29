Function.prototype.inheritsFrom = function (SuperClass) {
    var Dummy = function () {
        this.constructor = this;
    };

    Dummy.prototype = SuperClass.prototype;

    this.prototype = new Dummy();

    this.prototype.__super__ = SuperClass.prototype;

    return this;
};

var SuperClass = function () {
    this.superOne = 1;
};

SuperClass.prototype.superTwo = function () {
    return this.superOne;
};

var SubClass = function () {
    this.subOne = 3;
}.inheritsFrom(SuperClass);

SubClass.prototype.subTwo = function () {
    return this.subOne;
};