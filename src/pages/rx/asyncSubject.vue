<template>
  <div class="asyncSubject">  
    app/rx/asyncSubject
    <br/><br/>  
    AsyncSubject 是另一个 Subject 变体，
    只有当 Observable 执行完成时(执行 complete())，
    它才会将执行的最后一个值发送给观察者。
    <input type="button" value="asyncSubject1" @click="asyncSubject1" />
    <br/>
    <hr/>


  </div>
</template>


<script>
import Rx from 'rxjs/Rx';

export default {
  name: 'asyncSubject',
  methods: {
    async asyncSubject1 () {
      var source = new Rx.AsyncSubject();
      source.subscribe({next: (v) => console.log('observer 1 -> v = ' + v)});

      source.next(1);
      source.next(2);
      source.next(3);
      source.next(4);

      source.subscribe({next: (v) => console.log('observer 2 -> v = ' + v)});

      source.next(5);
      source.complete();
    }
  }
};

</script>