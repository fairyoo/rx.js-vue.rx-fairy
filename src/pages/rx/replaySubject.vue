<template>
  <div class="replaySubject">  
    app/rx/replaySubject
    <br/><br/>  
    ReplaySubject 类似于 BehaviorSubject，
    它可以发送旧值给新的订阅者，
    但它还可以记录 Observable 执行的一部分。
    <input type="button" value="replaySubject1" @click="replaySubject1" />
    <br/>
    <hr/>

    除了缓冲数量，你还可以指定 window time (以毫秒为单位)来确定多久之前的值可以记录。
    在下面的示例中，我们使用了较大的缓存数量100，但 window time 参数只设置了500毫秒。
    <input type="button" value="replaySubject1" @click="replaySubject2" />
    <br/>
    <hr/>
  </div>
</template>


<script>
import Rx from 'rxjs/Rx';

export default {
  name: 'replaySubject',
  methods: {
    async replaySubject1 () {
      // var source = new Rx.Subject(3);
      var source = new Rx.ReplaySubject(3);// 为新的订阅者缓冲3个值
      source.subscribe({ next: (v) => console.log('observer 1 -> v = ' + v) });

      source.next(1);
      source.next(2);
      source.next(3);
      source.next(4);

      source.subscribe({ next: (v) => console.log('observer 2 -> v = ' + v) });

      // source.next(5);
    },
    replaySubject2 () {
      var source = new Rx.ReplaySubject(3, 500, Rx.Scheduler.queue);
      source.subscribe({ next: (v) => console.log('observer 1 -> v = ' + v) });

      var index = 1;
      setInterval(() => { source.next(index++); }, 300);

      setTimeout(() => { source.unsubscribe(); }, 3000);
    }
  }
};

</script>