<template>
  <div class="rx">
    app/rx
    <router-link to="rx/cn/refCount">refCount</router-link>
    <router-link :to="{path: 'rx/cn/contact' }">contact</router-link>
    <router-link :to="{path: 'rx/cn/behaviorSubject' }">behaviorSubject</router-link>
    <router-link :to="{path: 'rx/cn/replaySubject' }">replaySubject</router-link>
    <router-link :to="{path: 'rx/cn/asyncSubject' }">asyncSubject</router-link>
    <router-link :to="{path: 'rx/cn/scheduler' }">scheduler</router-link>
    <router-link :to="{path: 'rx/cn/operator6' }">operator6</router-link>
    <br/><br/>
    
    <div style="border:1px solid gray;padding:10px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rx'
};
</script>