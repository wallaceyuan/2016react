'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yuan on 2016/5/13.
 */
var human = {
    breathe: function breathe() {
        console.log('breathing...');
    }
};
var worker = {
    __proto__: human,
    company: 'freelancer',
    work: function work() {
        console.log('working in ' + this.company);
    }
};
human.breathe();
worker.work();

var Animal = function () {
    //ES6中新型构造器

    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
    }
    //实例方法


    _createClass(Animal, [{
        key: 'sayName',
        value: function sayName() {
            console.log('My name is ' + this.name);
        }
    }]);

    return Animal;
}();

var name = 'yuan';

var html = '<div>\n' + name + '<span>play</span><em>piano</em>\n</div>';

document.write(html);