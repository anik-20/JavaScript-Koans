
module("About Truthyness (topics/about_truthyness.js)");

test("string literals", function() {
    var oneIsTruthy = 3 > 2 ? 18 : 6;
    equal(18, oneIsTruthy, 'is one truthy?');
});

test("truthyness of negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    equal(true, negativeOneIsTruthy, 'is -1 truthy?');
});

test("truthyness of zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    equal(false, zeroIsTruthy, 'is 0 truthy?');
});

test("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    equal(false, nullIsTruthy, 'is null truthy?');
});
