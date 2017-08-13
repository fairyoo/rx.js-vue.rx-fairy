<template>
  <div class="vue-rx">
    app/vue-rx
    <router-link to="vuerx/cn/github">github</router-link>
    <br/><br/>
    
    <div style="border:1px solid gray;padding:10px;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-rx'
};
</script>