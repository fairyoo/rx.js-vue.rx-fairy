// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import VueRx from 'vue-rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription'; // 如果使用 RxJS 4 可自由使用
import { Subject } from 'rxjs/Subject'; // domStreams 选项所需

import 'rxjs/add/operator/publish';// 如果我们使用了$watchAsObservable，还会需要引入另外一个东西：import 'rxjs/add/operator/publish'
import 'rxjs/add/observable/empty';// 如果使用了$fromDOMEvent，还需要引入这个：import 'rxjs/add/observable/empty'

Vue.config.productionTip = false;
Vue.use(VueRx, {Observable, Subscription, Subject});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
