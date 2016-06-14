// a.js
var say = function (number) {
    if (number > 0) {
        number--;
        console.log(number);
        say(number);
    }
};

say(10);
console.log("------------");
say(5);
// b.js
var log = function (msg) {
    console.log("--------");
    console.log(msg);
    console.log("--------");
};
log({a:100});
log("gulp-template");