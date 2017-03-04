
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok(3>2 === true, 'what will satisfy the ok assertion?');
    ok(true === true, 'what will satisfy the ok assertion?');
    ok(!false === true, 'what will satisfy the ok assertion?');
    ok(2<3=== true, 'what will satisfy the ok assertion?');
    ok(1<3=== true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(!true === false, 'what is a false value?');
    ok(3<2 === false, 'what is a false value?');
    ok(10<2 === false, 'what is a false value?');
    ok(false === false, 'what is a false value?');
});

test("equal", function() {
    equal(5-3, 1 + 1, 'what will satisfy the equal assertion?');
    equal(2, 1 + 1, 'what will satisfy the equal assertion?');
});
