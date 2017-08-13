http://jsrun.net/tutorial/GZKKp

http://jsrun.net/tutorial/ZgKKp
参考链接 修改教程
上一节 ： SIMD 单指令，多数据下一节 ： 无
官方文件

ECMAScript® 2015 Language Specification: ECMAScript 2015规格
ECMAScript® 2016 Language Specification: ECMAScript 2016规格
ECMAScript® 2017 Language Specification：ECMAScript 2017规格（草案）
ECMAScript Current Proposals: ECMAScript当前的所有提案
ECMAScript Active Proposals: 已经进入正式流程的提案
ECMAscript proposals：从阶段0到阶段4的所有提案列表
TC39 meeting agendas: TC39 委员会历年的会议记录
ECMAScript Daily: TC39委员会的动态
The TC39 Process: 提案进入正式规格的流程
TC39: A Process Sketch, Stages 0 and 1: Stage 0 和 Stage 1 的含义
TC39 Process Sketch, Stage 2: Stage 2 的含义
综合介绍

Axel Rauschmayer, Exploring ES6: Upgrade to the next version of JavaScript: ES6的专著，本书的许多代码实例来自该书
Sayanee Basu, Use ECMAScript 6 Today
Ariya Hidayat, Toward Modern Web Apps with ECMAScript 6
Dale Schouten, 10 Ecmascript-6 tricks you can perform right now
Colin Toh, Lightweight ES6 Features That Pack A Punch: ES6的一些“轻量级”的特性介绍
Domenic Denicola, ES6: The Awesome Parts
Nicholas C. Zakas, Understanding ECMAScript 6
Justin Drake, ECMAScript 6 in Node.JS
Ryan Dao, Summary of ECMAScript 6 major features
Luke Hoban, ES6 features: ES6新语法点的罗列
Traceur-compiler, Language Features: Traceur文档列出的一些ES6例子
Axel Rauschmayer, ECMAScript 6: what’s next for JavaScript?: 关于ES6新增语法的综合介绍，有很多例子
Axel Rauschmayer, Getting started with ECMAScript 6: ES6语法点的综合介绍
Toby Ho, ES6 in io.js
Guillermo Rauch, ECMAScript 6
Charles King, The power of ECMAScript 6
Benjamin De Cock, Frontend Guidelines: ES6最佳实践
Jani Hartikainen, ES6: What are the benefits of the new features in practice?
kangax, Javascript quiz. ES6 edition: ES6小测试
Jeremy Fairbank, HTML5DevConf ES7 and Beyond!: ES7新增语法点介绍
let和const

Kyle Simpson, For and against let: 讨论let命令的作用域
kangax, Why typeof is no longer “safe”: 讨论在块级作用域内，let命令的变量声明和赋值的行为
Axel Rauschmayer, Variables and scoping in ECMAScript 6: 讨论块级作用域与let和const的行为
Nicolas Bevacqua, ES6 Let, Const and the “Temporal Dead Zone” (TDZ) in Depth
acorn, Function statements in strict mode: 块级作用域对严格模式的函数声明的影响
Axel Rauschmayer, ES proposal: global: 顶层对象global
解构赋值

Nick Fitzgerald, Destructuring Assignment in ECMAScript 6: 详细介绍解构赋值的用法
Nicholas C. Zakas, ECMAScript 6 destructuring gotcha
字符串

Nicholas C. Zakas, A critical review of ECMAScript 6 quasi-literals
Mozilla Developer Network, Template strings
Addy Osmani, Getting Literal With ES6 Template Strings: 模板字符串的介绍
Blake Winton, ES6 Templates: 模板字符串的介绍
Peter Jaszkowiak, How to write a template compiler in JavaScript: 使用模板字符串，编写一个模板编译函数
Axel Rauschmayer, ES.stage3: string padding
正则

Mathias Bynens, Unicode-aware regular expressions in ES6: 详细介绍正则表达式的u修饰符
Axel Rauschmayer, New regular expression features in ECMAScript 6：ES6正则特性的详细介绍
Yang Guo, RegExp lookbehind assertions：介绍后行断言
数值

Nicolas Bevacqua, ES6 Number Improvements in Depth
数组

Axel Rauschmayer, ECMAScript 6’s new array methods: 对ES6新增的数组方法的全面介绍
TC39, Array.prototype.includes: 数组的includes方法的规格
Axel Rauschmayer, ECMAScript 6: holes in Arrays: 数组的空位问题
函数

Nicholas C. Zakas, Understanding ECMAScript 6 arrow functions
Jack Franklin, Real Life ES6 - Arrow Functions
Axel Rauschmayer, Handling required parameters in ECMAScript 6
Dmitry Soshnikov, ES6 Notes: Default values of parameters: 介绍参数的默认值
Ragan Wald, Destructuring and Recursion in ES6: rest参数和扩展运算符的详细介绍
Axel Rauschmayer, The names of functions in ES6: 函数的name属性的详细介绍
Kyle Simpson, Arrow This: 箭头函数并没有自己的this
Derick Bailey, Do ES6 Arrow Functions Really Solve “this” In JavaScript?：使用箭头函数处理this指向，必须非常小心
Mark McDonnell, Understanding recursion in functional JavaScript programming: 如何自己实现尾递归优化
Nicholas C. Zakas, The ECMAScript 2016 change you probably don't know: 使用参数默认值时，不能在函数内部显式开启严格模式
对象

Addy Osmani, Data-binding Revolutions with Object.observe(): 介绍Object.observe()的概念
Sella Rafaeli, Native JavaScript Data-Binding: 如何使用Object.observe方法，实现数据对象与DOM对象的双向绑定
Axel Rauschmayer, __proto__ in ECMAScript 6
Axel Rauschmayer, Enumerability in ECMAScript 6
Axel Rauschmayer, ES proposal: Object.getOwnPropertyDescriptors()
TC39, Object.getOwnPropertyDescriptors Proposal
Symbol

Axel Rauschmayer, Symbols in ECMAScript 6: Symbol简介
MDN, Symbol: Symbol类型的详细介绍
Jason Orendorff, ES6 In Depth: Symbols
Keith Cirkel, Metaprogramming in ES6: Symbols and why they're awesome: Symbol的深入介绍
Axel Rauschmayer, Customizing ES6 via well-known symbols
Derick Bailey, Creating A True Singleton In Node.js, With ES6 Symbols
Das Surma, How to read web specs Part IIa – Or: ECMAScript Symbols: 介绍 Symbol 的规格
Set和Map

Mozilla Developer Network, WeakSet：介绍WeakSet数据结构
Dwayne Charrington, What Are Weakmaps In ES6?: WeakMap数据结构介绍
Axel Rauschmayer, ECMAScript 6: maps and sets: Set和Map结构的详细介绍
Jason Orendorff, ES6 In Depth: Collections：Set和Map结构的设计思想
Axel Rauschmayer, Converting ES6 Maps to and from JSON: 如何将Map与其他数据结构互相转换
Proxy 和 Reflect

Nicholas C. Zakas, Creating defensive objects with ES6 proxies
Axel Rauschmayer, Meta programming with ECMAScript 6 proxies: Proxy详解
Daniel Zautner, Meta-programming JavaScript Using Proxies: 使用Proxy实现元编程
Tom Van Cutsem, Harmony-reflect: Reflect对象的设计目的
Tom Van Cutsem, Proxy Traps: Proxy拦截操作一览
Tom Van Cutsem, Reflect API
Tom Van Cutsem, Proxy Handler API
Nicolas Bevacqua, ES6 Proxies in Depth
Nicolas Bevacqua, ES6 Proxy Traps in Depth
Nicolas Bevacqua, More ES6 Proxy Traps in Depth
Axel Rauschmayer, Pitfall: not all objects can be wrapped transparently by proxies
Bertalan Miklos, Writing a JavaScript Framework - Data Binding with ES6 Proxies: 使用 Proxy 实现观察者模式
Keith Cirkel, Metaprogramming in ES6: Part 2 - Reflect: Reflect API 的详细介绍
Promise 对象

Jake Archibald, JavaScript Promises: There and back again
Tilde, rsvp.js
Sandeep Panda, An Overview of JavaScript Promises: ES6 Promise入门介绍
Dave Atchley, ES6 Promises: Promise的语法介绍
Axel Rauschmayer, ECMAScript 6 promises (2/2): the API: 对ES6 Promise规格和用法的详细介绍
Jack Franklin, Embracing Promises in JavaScript: catch 方法的例子
Ronald Chen, How to escape Promise Hell: 如何使用Promise.all方法的一些很好的例子
Jordan Harband, proposal-promise-try: Promise.try() 方法的提案
Sven Slootweg, What is Promise.try, and why does it matter?: Promise.try() 方法的优点
Yehuda Katz, TC39: Promises, Promises: Promise.try() 的用处
Iterator

Mozilla Developer Network, Iterators and generators
Mozilla Developer Network, The Iterator protocol
Jason Orendorff, ES6 In Depth: Iterators and the for-of loop: 遍历器与for...of循环的介绍
Axel Rauschmayer, Iterators and generators in ECMAScript 6: 探讨Iterator和Generator的设计目的
Axel Rauschmayer, Iterables and iterators in ECMAScript 6: Iterator的详细介绍
Kyle Simpson, Iterating ES6 Numbers: 在数值对象上部署遍历器
Generator

Matt Baker, Replacing callbacks with ES6 Generators
Steven Sanderson, Experiments with Koa and JavaScript Generators
jmar777, What's the Big Deal with Generators?
Marc Harter, Generators in Node.js: Common Misconceptions and Three Good Use Cases: 讨论Generator函数的作用
StackOverflow, ES6 yield : what happens to the arguments of the first call next()?: 第一次使用next方法时不能带有参数
Kyle Simpson, ES6 Generators: Complete Series: 由浅入深探讨Generator的系列文章，共四篇
Gajus Kuizinas, The Definitive Guide to the JavaScript Generators: 对Generator的综合介绍
Jan Krems, Generators Are Like Arrays: 讨论Generator可以被当作数据结构看待
Harold Cooper, Coroutine Event Loops in Javascript: Generator用于实现状态机
Ruslan Ismagilov, learn-generators: 编程练习，共6道题
Steven Sanderson, Experiments with Koa and JavaScript Generators: Generator入门介绍，以Koa框架为例
Mahdi Dibaiee, ES7 Array and Generator comprehensions：ES7的Generator推导
Nicolas Bevacqua, ES6 Generators in Depth
Axel Rauschmayer, ES6 generators in depth: Generator规格的详尽讲解
Derick Bailey, Using ES6 Generators To Short-Circuit Hierarchical Data Iteration：使用 for...of 循环完成预定的操作步骤
异步操作和Async函数

Luke Hoban, Async Functions for ECMAScript: Async函数的设计思想，与Promise、Gernerator函数的关系
Jafar Husain, Asynchronous Generators for ES7: Async函数的深入讨论
Nolan Lawson, Taming the asynchronous beast with ES7: async函数通俗的实例讲解
Jafar Husain, Async Generators: 对async与Generator混合使用的一些讨论
Daniel Brain, Understand promises before you start using async/await: 讨论async/await与Promise的关系
Jake Archibald, Async functions - making promises friendly
Axel Rauschmayer, ES proposal: asynchronous iteration: 异步遍历器的详细介绍
Dima Grossman, How to write async await without try-catch blocks in Javascript: 除了 try/catch 以外的 async 函数内部捕捉错误的方法
Class

Sebastian Porto, ES6 classes and JavaScript prototypes: ES6 Class的写法与ES5 Prototype的写法对比
Jack Franklin, An introduction to ES6 classes: ES6 class的入门介绍
Axel Rauschmayer, ECMAScript 6: new OOP features besides classes
Axel Rauschmayer, Classes in ECMAScript 6 (final semantics): Class语法的详细介绍和设计思想分析
Eric Faust, ES6 In Depth: Subclassing: Class语法的深入介绍
Nicolás Bevacqua, Binding Methods to Class Instance Objects: 如何绑定类的实例中的this
Decorator

Maximiliano Fierro, Declarative vs Imperative: Decorators和Mixin介绍
Justin Fagnani, "Real" Mixins with JavaScript Classes: 使用类的继承实现Mixin
Addy Osmani, Exploring ES2016 Decorators: Decorator的深入介绍
Sebastian McKenzie, Allow decorators for functions as well: 为什么修饰器不能用于函数
Maximiliano Fierro, Traits with ES7 Decorators: Trait的用法介绍
Jonathan Creamer: Using ES2016 Decorators to Publish on an Event Bus: 使用修饰器实现自动发布事件
Module

Jack Franklin, JavaScript Modules the ES6 Way: ES6模块入门
Axel Rauschmayer, ECMAScript 6 modules: the final syntax: ES6模块的介绍，以及与CommonJS规格的详细比较
Dave Herman, Static module resolution: ES6模块的静态化设计思想
Jason Orendorff, ES6 In Depth: Modules: ES6模块设计思想的介绍
Ben Newman, The Importance of import and export: ES6模块的设计思想
ESDiscuss, Why is "export default var a = 1;" invalid syntax?
Bradley Meck, ES6 Module Interoperability: 介绍 Node 如何处理 ES6 语法加载 CommonJS 模块
Axel Rauschmayer, Making transpiled ES modules more spec-compliant: ES6 模块编译成 CommonJS 模块的详细介绍
Axel Rauschmayer, ES proposal: import() – dynamically importing ES modules: import() 的用法
二进制数组

Ilmari Heikkinen, Typed Arrays: Binary Data in the Browser
Khronos, Typed Array Specification
Ian Elliot, Reading A BMP File In JavaScript
Renato Mangini, How to convert ArrayBuffer to and from String
Axel Rauschmayer, Typed Arrays in ECMAScript 6
SIMD

TC39, SIMD.js Stage 2
MDN, SIMD
TC39, ECMAScript SIMD
Axel Rauschmayer, JavaScript gains support for SIMD
工具

Babel, Babel Handbook: Babel的用法介绍
Google, traceur-compiler: Traceur编译器
Casper Beyer, ECMAScript 6 Features and Tools
Stoyan Stefanov, Writing ES6 today with jstransform
ES6 Module Loader, ES6 Module Loader Polyfill: 在浏览器和node.js加载ES6模块的一个库，文档里对ES6模块有详细解释
Paul Miller, es6-shim: 一个针对老式浏览器，模拟ES6部分功能的垫片库（shim）
army8735, Javascript Downcast: 国产的ES6到ES5的转码器
esnext, ES6 Module Transpiler：基于node.js的将ES6模块转为ES5代码的命令行工具
Sebastian McKenzie, BabelJS: ES6转译器
SystemJS, SystemJS: 在浏览器中加载AMD、CJS、ES6模块的一个垫片库
Modernizr, HTML5 Cross Browser Polyfills: ES6垫片库清单
Facebook, regenerator: 将Generator函数转为ES5的转码器