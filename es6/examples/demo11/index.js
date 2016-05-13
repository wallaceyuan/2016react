/**
 * Created by yuan on 2016/5/13.
 */
var human = {
    breathe(){
        console.log('breathing...');
    }
}
var worker = {
    __proto__:human,
    company:'freelancer',
    work(){
        console.log('working in '+this.company);
    }
}
human.breathe();
worker.work();


class Animal {
    //ES6中新型构造器
    constructor(name) {
        this.name = name;
    }
    //实例方法
    sayName() {
        console.log('My name is '+this.name);
    }
}



var name = 'yuan';

var html = `<div>
${name}<span>play</span><em>piano</em>
</div>`;

document.write(html);