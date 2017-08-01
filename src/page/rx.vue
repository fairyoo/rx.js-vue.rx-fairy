<template>
  <div class="rx">
    app/rx
    <router-link to="rx/refCount">refCount</router-link>
    <router-link :to="{path: 'rx/contact' }">contact</router-link>
    <router-link :to="{path: 'rx/behaviorSubject' }">behaviorSubject</router-link>
    <router-link :to="{path: 'rx/replaySubject' }">replaySubject</router-link>
    <router-link :to="{path: 'rx/asyncSubject' }">asyncSubject</router-link>
    <router-link :to="{path: 'rx/scheduler' }">scheduler</router-link>
    <router-link :to="{path: 'rx/operator6' }">operator6</router-link>
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