<template>
  <div class="operator6">
    app/rx/operator6
    <br/>
    <br/> 按顺序订阅 Observables，但是只有当一个完成并让我知道，然后才会开始下一个
    <input type="button" value="concat" @click="operator6_concat" />
    <br/>
    <hr /> 别让我知道直到所有的 Observables 都完成了，然后再一次性的给我所有的值。(以数组的形式)
    <input type="button" value="forkJoin" @click="operator6_forkJoin" />
    <br/>
    <hr /> 仅当内部 Obervable 发出值时，通过合并值到外部 Observable 来让我知道。
    <br/> 首先，我们得理解 Observables 世界中的两个术语:
    <br/> ```源 (或外部) Observable - 在本例中就是 post$ Observable 。
    <br/> ```内部 Observable - 在本例中就是 getPostInfo$ Observable 。
    <br/>
    <input type="button" value="mergeMap" @click="operator6_mergeMap" />
    <br/>
    <hr /> 
    追踪页面滚动增量 pairwise<br/>
    `````从输入 Observable 的第二个值开始触发<br/>
    <input type="button" value="pairwise" @click="operator6_pairwise" />
    <br/>
    <hr />

    类似于 mergeMap，但是当源 Observable 发出值时会取消内部 Observable 先前的所有订阅 。
    <input type="button" value="switchMap" @click="operator6_switchMap" />
    <br/>
    <hr />

    当任意 Observable 发出值时让我知道，但还要给我其他 Observalbes 的最新值。(以数组的形式)
    <input type="button" value="combineLatest" @click="operator6_combineLatest" />
    <br/>
    <hr />
  </div>
</template>


<script>
import Rx from 'rxjs/Rx';

export default {
  name: 'operator6',
  methods: {
    operator6_concat () {
      var observable1 = Rx.Observable.timer(3000).mapTo({ id: 1 });
      var observable2 = Rx.Observable.timer(1000).mapTo({ id: 2 });
      var myConcat = Rx.Observable.concat(observable1, observable2);
      myConcat.subscribe({
        next: v => {
          console.log('v = ' + v);
          console.log('v.id = ' + v.id);
        }
      });
    },
    operator6_forkJoin () {
      var source1 = Rx.Observable.timer(1000).mapTo({ id: 1 });
      var source2 = Rx.Observable.timer(2000).mapTo({ id: 2 });
      var source3 = Rx.Observable.forkJoin(source1, source2);
      source3.subscribe({
        next: v => { // 别让我知道直到所有的 Observables 都完成了，然后再一次性的给我所有的值。(以数组的形式)
          console.log('v.length = ' + v.length);
          v.forEach(function (element) {
            console.log('v.element = ' + element);
            console.log('v.element.id = ' + element.id);
          }, this);
        }
      });
    },
    operator6_mergeMap () {
      // 仅当内部 Obervable 发出值时，通过合并值到外部 Observable 来让我知道。 --->

      // 源 (或外部) Observable - 在本例中就是 post$ Observable 。
      const post = Rx.Observable.of({ id: 1 });
      // 内部 Observable - 在本例中就是 getPostInfo$ Observable 。
      const getPostInfo = Rx.Observable.timer(2000).mapTo({ title: ' mergeMap' });

      const postResult = post.mergeMap(post => getPostInfo);
      postResult.subscribe({
        next: v => {
          console.log('v=' + v);
          console.log('v.title=' + v.title);
        }
      });
    },
    operator6_pairwise () {
      Rx.Observable.fromEvent(document, 'scroll')
        .map(e => window.pageYOffset)
        .pairwise()
        .subscribe({
          next: pair => {
            console.log('pair.length = ' + pair.length);
            console.log('pair = ' + pair);
            console.log('pair.before = ' + pair[0]);
            console.log('pair.current = ' + pair[1]);
          }
        });
    },
    operator6_switchMap () {
      const clicks = Rx.Observable.fromEvent(document, 'click');
      const inners = Rx.Observable.interval(1000);

      const subject = clicks.switchMap(event => inners);
      subject.subscribe({
        next: value => {
          console.log('value = ' + value);
        }
      });
    },
    operator6_combineLatest () {
      console.log('clicked ！');
      const source1 = Rx.Observable.interval(1000);
      const source2 = Rx.Observable.interval(2000);
      const source3 = Rx.Observable.combineLatest(source1, source2);
      source3.subscribe({
        next: values => {
          console.log('source3 -> values.length = ' + values.length);
          console.log('source3 -> values[0] = ' + values[0]);
          console.log('source3 -> values[1] = ' + values[1]);
        }
      });
    }
  }
};

</script>