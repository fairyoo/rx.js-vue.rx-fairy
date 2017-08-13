import Vue from 'vue';
import Router from 'vue-router';

//
Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: r => require.ensure([], () => r(require('../page/home/home')), 'home')
    },
    {
      name: 'rx',
      path: '/rx',
      component: r => require.ensure([], () => r(require('../page/rx/rx')), 'rx'),
      children: [
        {
          path: 'cn/refCount',
          component: r => require.ensure([], () => r(require('../page/rx/cn/refCount')), 'refCount')
        },
        {
          path: 'cn/contact',
          component: r => require.ensure([], () => r(require('../page/rx/cn/contact')), 'contact')
        },
        {
          path: 'cn/behaviorSubject',
          component: r => require.ensure([], () => r(require('../page/rx/cn/behaviorSubject')), 'behaviorSubject')
        },
        {
          path: 'cn/replaySubject',
          component: r => require.ensure([], () => r(require('../page/rx/cn/replaySubject')), 'replaySubject')
        },
        {
          path: 'cn/asyncSubject',
          component: r => require.ensure([], () => r(require('../page/rx/cn/asyncSubject')), 'asyncSubject')
        },
        {
          path: 'cn/scheduler',
          component: r => require.ensure([], () => r(require('../page/rx/cn/scheduler')), 'scheduler')
        },
        {
          path: 'cn/operator6',
          component: r => require.ensure([], () => r(require('../page/rx/cn/operator6')), 'operator6')
        },
        {
          path: 'cn/copy',
          component: r => require.ensure([], () => r(require('../page/rx/cn/copy')), 'copy')
        }
      ]
    },
    {
      name: 'vuerx',
      path: '/vuerx',
      component: r => require.ensure([], () => r(require('../page/vuerx/vuerx')), 'vuerx'),
      children: [
        {
          name: 'vuerxCnGithub',
          path: 'cn/github',
          component: r => require.ensure([], () => r(require('../page/vuerx/cn/github')), 'vuerxCnGithub')
        }
      ]
    },
    {//
      name: 'es',
      path: '/es',
      component: r => require.ensure([], () => r(require('../page/es/es')), 'es'),
      children: [{
        path: 'grammar/variable',
        component: r => require.ensure([], () => r(require('../page/es/grammar/variable')), 'esGrammarVariable')
      },
      {
        path: 'grammar/string',
        component: r => require.ensure([], () => r(require('../page/es/grammar/string')), 'esGrammarString')
      },
      {
        path: 'grammar/regex',
        component: r => require.ensure([], () => r(require('../page/es/grammar/regex')), 'esGrammarRegex')
      },
      {
        path: 'grammar/number',
        component: r => require.ensure([], () => r(require('../page/es/grammar/number')), 'esGrammarNumber')
      },
      {
        path: 'grammar/array',
        component: r => require.ensure([], () => r(require('../page/es/grammar/array')), 'esGrammarArray')
      },
      {
        path: 'grammar/function',
        component: r => require.ensure([], () => r(require('../page/es/grammar/function')), 'esGrammarFunction')
      },
      {
        path: 'grammar/object',
        component: r => require.ensure([], () => r(require('../page/es/grammar/object')), 'esGrammarObject')
      },
      {
        path: 'grammar/symbol',
        component: r => require.ensure([], () => r(require('../page/es/grammar/symbol')), 'esGrammarSymbol')
      },
      {
        path: 'grammar/set_map',
        component: r => require.ensure([], () => r(require('../page/es/grammar/set_map')), 'esGrammarSet_map')
      },
      {
        path: 'grammar/proxy',
        component: r => require.ensure([], () => r(require('../page/es/grammar/proxy')), 'esGrammarProxy')
      },
      {
        path: 'grammar/reflect', // Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。
        component: r => require.ensure([], () => r(require('../page/es/grammar/reflect')), 'esGrammarReflect')
      },
      {
        path: 'grammar/promise', // Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了Promise对象
        component: r => require.ensure([], () => r(require('../page/es/grammar/promise')), 'esGrammarPromise')
      },
      {
        path: 'grammar/iterator',
        component: r => require.ensure([], () => r(require('../page/es/grammar/iterator')), 'esGrammarIterator')
      },
      {
        path: 'grammar/generator',
        component: r => require.ensure([], () => r(require('../page/es/grammar/generator')), 'esGrammarGenerator')
      },
      {
        path: 'grammar/async',
        component: r => require.ensure([], () => r(require('../page/es/grammar/async')), 'esGrammarAsync')
      },
      {
        path: 'grammar/class',
        component: r => require.ensure([], () => r(require('../page/es/grammar/class')), 'esGrammarClass')
      },
      {
        path: 'grammar/decorator',
        component: r => require.ensure([], () => r(require('../page/es/grammar/decorator')), 'esGrammarDecorator')
      },
      {
        path: 'grammar/module',
        component: r => require.ensure([], () => r(require('../page/es/grammar/module')), 'esGrammarModule')
      },
      {
        path: 'grammar/programming',
        component: r => require.ensure([], () => r(require('../page/es/grammar/programming')), 'esGrammarProgramming')
      },
      {
        path: 'grammar/ECMAScript',
        component: r => require.ensure([], () => r(require('../page/es/grammar/ECMAScript')), 'esGrammarECMAScript')
      },
      {
        path: 'grammar/arrayBuffer',
        component: r => require.ensure([], () => r(require('../page/es/grammar/arrayBuffer')), 'esGrammarArrayBuffer')
      },
      {
        path: 'grammar/SIMD',
        component: r => require.ensure([], () => r(require('../page/es/grammar/SIMD')), 'esGrammarSIMD')
      },
      {
        path: 'grammar/link',
        component: r => require.ensure([], () => r(require('../page/es/grammar/link')), 'esGrammarLink')
      }]
    }
  ]
});
