/**
 * Created by yuan on 2016/5/13.
 */
var array = [1, 2, 3];
//传统写法
array.forEach(function(v, i, a) {
    console.log(v,i,a);
});
//ES6

const Template = {
    test: function(){
        console.log('13',this);
        $('#event').on('click',()=>{
            // 大家觉得这个 this 是什么
            console.log('16',this);
        });
    }
};
Template.test();