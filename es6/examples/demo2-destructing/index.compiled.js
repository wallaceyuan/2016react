'use strict';

// 数组的解构赋值

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var foo = 1;
var bar = 2;
var baz = 3;

console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

// 对象的解构赋值
var _name$age = { name: "guoyongfeng", age: 18 };
var name = _name$age.name;
var age = _name$age.age;

console.log(foo);
console.log(bar);

// 字符串的解构赋值
var _hello = 'hello';

var _hello2 = _slicedToArray(_hello, 5);

var a = _hello2[0];
var b = _hello2[1];
var c = _hello2[2];
var d = _hello2[3];
var e = _hello2[4];

console.log(a + b + c + d + e); // 'hello'