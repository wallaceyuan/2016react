'use strict';

/**
 * Created by yuan on 2016/5/13.
 */
var array = [1, 2, 3];
//传统写法
array.forEach(function (v, i, a) {
    console.log(v, i, a);
});
//ES6

var Template = {
    test: function test() {
        var _this = this;

        console.log('13', this);
        $('#event').on('click', function () {
            // 大家觉得这个 this 是什么
            console.log('16', _this);
        });
    }
};
Template.test();