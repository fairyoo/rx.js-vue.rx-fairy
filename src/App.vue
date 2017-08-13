<template>
  <div id="app"  style="border:1px solid gray;padding:10px;">
    App.vue
    {
      <router-link to="home">home</router-link>
      <router-link :to="{path: 'home' }">home</router-link>
    }
    {
      <router-link to="rx">rx</router-link>
      <router-link :to="{path: 'rx' }">rx</router-link>
    }
    {
      <router-link to="vuerx">vue-rx</router-link>
      <router-link :to="{path: 'vuerx' }">vue-rx</router-link>
    }
    {
      <router-link to="es">es</router-link>
      <router-link :to="{path: 'es' }">es</router-link>
    }
    <br/>
    <br/>
    <div style="border:1px solid gray;padding:10px;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app'
};
</script>
