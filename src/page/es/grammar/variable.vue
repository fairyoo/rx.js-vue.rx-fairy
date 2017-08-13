<template>
  <div class="esGrammarVariable">  
    app/es/grammar/variable<br/><br/>  
    <hr/><br/>
    let命令  用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。<br/>

    let [a, b, c] = [1, 2, 3];<br/>
    let [x, , y] = [1, 2, 3];<br/>
    let [head, ...tail] = [1, 2, 3, 4];//head : 1 ;tail : [2, 3, 4]<br/>
    let [x, y, z] = new Set(['a', 'b', 'c']);//x: "a"<br/>
    let [first, second, third, fourth, fifth, sixth] = fibs(返回数组);<br/>
    let [x, y = 'b'] = ['a']; // x='a', y='b'<br/>
    let [foo = true] = [];//foo： true<br/>
    <hr/><br/>
    const 命令  const声明一个只读的常量。一旦声明，常量的值就不能改变。<br/>

    <hr/><br/>
    var命令  var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined<br/>
    <hr/><br/>
    do 表达式    本质上，块级作用域是一个语句，将多个操作封装在一起，没有返回值。<br/>
    <hr/><br/>
    顶层对象的属性, 顶层对象，在浏览器环境指的是window对象，在Node指的是global对象。 <br/>
    ES5之中，顶层对象的属性与全局变量是等价的。<br/>
    从ES6开始，全局变量将逐步与顶层对象的属性脱钩。<br/><br/>

    var a = 1;<br/>
    // 如果在Node的REPL环境，可以写成global.a<br/>
    // 或者采用通用方法，写成this.a<br/>
    window.a // 1<br/><br/>

    let b = 1;<br/>
    window.b // undefined<br/>


    <hr/><br/>
    默认值  ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。<br/>

    let [x = 1] = [undefined];//x : 1<br/>
    let [x = 1] = [null];//x : null<br/><br/>

    let [x = 1, y = x] = [];     // x=1; y=1<br/>
    let [x = 1, y = x] = [2];    // x=2; y=2<br/>
    let [x = 1, y = x] = [1, 2]; // x=1; y=2<br/>
    let [x = y, y = 1] = [];     // ReferenceError<br/>

    <hr/><br/>
    对象的解构赋值<br/>
    let { foo, bar } = { foo: "aaa", bar: "bbb" };//foo="aaa";bar= "bbb"<br/>
    let { baz } = { foo: "aaa", bar: "bbb" };//baz : undefined<br/>
    let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };<br/>
    let { foo: baz } = { foo: "aaa", bar: "bbb" };//baz ： "aaa"；foo ： error: foo is not defined<br/><br/>
    
    let foo;({foo} = {foo: 1}); // 成功<br/>


    <hr/><br/>
    字符串的解构赋值<br/>

    const [a, b, c, d, e] = 'hello';//a= "h"； b ="e"；c = "l"；d = "l"；e = "o"

    <hr/><br/>
    交换变量的值<br/>

    let x = 1;<br/>
    let y = 2;<br/><br/>

    [x, y] = [y, x];<br/>
    上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。<br/><br/>
    //<br/>
    function example() {<br/>
      return [1, 2, 3];<br/>
    }<br/>
    let [a, b, c] = example();<br/>
    //<br/>
    function example() {<br/>
      return {<br/>
        foo: 1,<br/>
        bar: 2<br/>
      };<br/>
    }<br/>
    let { foo, bar } = example();<br/><br/>

    <hr/><br/>
    提取JSON数据<br/>

    let jsonData = {
      id: 42,
      status: "OK",
      data: [867, 5309]
    };

    let { id, status, data: number } = jsonData;

    console.log(id, status, number);
    // 42, "OK", [867, 5309]


    <hr/><br/>
    遍历Map结构<br/>

    var map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
      console.log(key + " is " + value);
    }
    // first is hello
    // second is world


    // 获取键名
    for (let [key] of map) {
      // ...
    }


    <hr/><br/>
    输入模块的指定方法<br/>

    加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
        const { SourceMapConsumer, SourceNode } = require("source-map");
  </div>
</template>


<script>
export default {
  name: 'esGrammarVariable',
  methods: {
    test () {
    }
  },
  beforeCreate () {
    // let////////////////////////////////////////////////////////////////////////////////
    for (let index = 0; index < 10; index++) {
      console.log(index);
    }

    // var////////////////////////////////////////////////////////////////////////////////
    // var 的情况
    console.log(foo); // 输出undefined
    var foo = 2;

    // let 的情况
    console.log(bar); // 报错ReferenceError
    let bar = 2;

    // do 表达式////////////////////////////////////////////////////////////////////////////////
    // function f () { return 1; }
    // let x = do {
    //   let t = f();
    //   t * t + 1;
    //   return t;
    // };
    // console.log(x);
  }
};

</script>