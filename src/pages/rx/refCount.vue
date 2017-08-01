<template>
  <div class="refCount">  
    app/rx/refCount
    <br/><br/> 
    <input type="button" value="create" @click="rxjsCreate" />

    <hr/>
    <input type="button" value="Subject" @click="subject" />
    <hr/>    
    <input type="button" value="multicasted" @click="multicasted" />    
    <hr/>
    refCount 的作用是，当有第一个订阅者时，多播 Observable 会自动地启动执行，
    而当最后一个订阅者离开时，多播 Observable 会自动地停止执行
    <input type="button" value="refCount" @click="refCount" />
    <br/>
  </div>
</template>


<script>
import Rx from 'rxjs/Rx';
export default {
  name: 'refCount',
  methods: {
    async rxjsCreate () {
      Rx.Observable.create(function (observer) {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
          observer.next(4);
          observer.complete();
        }, 1000);
      })
      .subscribe({
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => { console.log('complete'); }
      });
    },
    subject () {
      var subject = new Rx.Subject();
      subject.subscribe({
        next: (v) => console.log('subject onnext :vulue = ' + v)
      });

      subject.next(0);
      subject.next(1);
      subject.next(2);
    },
    multicasted () {
      var _source = Rx.Observable.from([1, 2, 3, 4]);
      var _subject = new Rx.Subject();
      var _multicasted = _source.multicast(_subject);
      _multicasted.subscribe({
        next: (v) => { console.log('observer A -> v=' + v); }
      });
      _multicasted.subscribe({
        next: (v) => { console.log('observer B -> v=' + v); }
      });
      _multicasted.concat();
    },
    refCount () {
      var source = Rx.Observable.interval(1000);
      var subject = new Rx.Subject();
      var reCounted = source.multicast(subject).refCount();
      var subscription1;
      var subscription2;

      subscription1 = reCounted.subscribe({ next: (v) => console.log('observer 1->v=' + v) });
      setTimeout(() => {
        subscription2 = reCounted.subscribe({ next: (v) => console.log('observer 2->v=' + v) });
      }, 3000);
      setTimeout(() => {
        console.log('subscription1.unsubscribe() exected');
        subscription1.unsubscribe();
      }, 6000);
      setTimeout(() => {
        console.log('subscription2.unsubscribe() exected');
        subscription2.unsubscribe();
      }, 12000);
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
