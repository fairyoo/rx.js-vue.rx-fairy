import Vue from 'vue';
import Router from 'vue-router';

const home = r => require.ensure([], () => r(require('../page/home')), 'home');
//
const rx = r => require.ensure([], () => r(require('../page/rx')), 'rx');
const refCount = r => require.ensure([], () => r(require('../page/rx/refCount')), 'refCount');
const contact = r => require.ensure([], () => r(require('../page/rx/contact')), 'contact');
const behaviorSubject = r => require.ensure([], () => r(require('../page/rx/behaviorSubject')), 'behaviorSubject');
const copy = r => require.ensure([], () => r(require('../page/rx/copy')), 'copy');
const replaySubject = r => require.ensure([], () => r(require('../page/rx/replaySubject')), 'replaySubject');
const asyncSubject = r => require.ensure([], () => r(require('../page/rx/asyncSubject')), 'asyncSubject');
const scheduler = r => require.ensure([], () => r(require('../page/rx/scheduler')), 'scheduler');
const operator6 = r => require.ensure([], () => r(require('../page/rx/operator6')), 'operator6');
//
const vuerx$ = r => require.ensure([], () => r(require('../page/vuerx')), 'vuerx');
const github = r => require.ensure([], () => r(require('../page/vuerx/github')), 'github');

Vue.use(Router);

const myroutes = [
  {
    name: 'home',
    path: '/home',
    component: home
  },
  {
    name: 'rx',
    path: '/rx',
    component: rx,
    children: [
      {
        path: 'refCount',
        component: refCount
      },
      {
        path: 'contact',
        component: contact
      },
      {
        path: 'behaviorSubject',
        component: behaviorSubject
      },
      {
        path: 'replaySubject',
        component: replaySubject
      },
      {
        path: 'asyncSubject',
        component: asyncSubject
      },
      {
        path: 'scheduler',
        component: scheduler
      },
      {
        path: 'operator6',
        component: operator6
      },
      {
        path: 'copy',
        component: copy
      }
    ]
  },
  {
    name: 'vuerx',
    path: '/vuerx',
    component: vuerx$,
    children: [
      {
        name: 'github',
        path: 'github',
        component: github
      }
    ]
  }
];
export default new Router({
  routes: myroutes
});
