<template>
  <div class="behaviorSubject">  
    app/rx/behaviorSubject
    <br/><br/>  
    Subject 的其中一个变体就是 BehaviorSubject，
    它有一个“当前值”的概念。它保存了发送给消费者的最新值。
    并且当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”。
    BehaviorSubjects 适合用来表示“随时间推移的值”。
    举例来说，生日的流是一个 Subject，但年龄的流应该是一个 BehaviorSubject 。
    <input type="button" value="behaviorSubject1" @click="behaviorSubject1" />
    <br/>
    <hr/>


  </div>
</template>


<script>
import Rx from 'rxjs/Rx';
export default {
  name: 'behaviorSubject',
  methods: {
    behaviorSubject1 () {
      var subject = new Rx.BehaviorSubject(0);
      subject.subscribe({
        next: (v) => console.log('observer 1 -> v = ' + v)
      });
      subject.next(1);
      subject.next(2);

      subject.subscribe({
        next: (v) => console.log('observer 2 -> v = ' + v)
      });
      subject.next(3);
    }
  }
};

</script>