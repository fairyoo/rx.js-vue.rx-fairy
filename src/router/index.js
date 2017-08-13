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
      }]
    }
  ]
});
