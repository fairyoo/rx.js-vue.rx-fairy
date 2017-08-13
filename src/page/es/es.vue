<template>
  <div class="es">
    app/es/ <br/>
    --------<router-link to="es/grammar/variable">grammar/variable</router-link><br/>
    --------<router-link to="es/grammar/string">grammar/string</router-link><br/>
    <br/><br/>
    
    <div style="border:1px solid gray;padding:10px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'es'
};
</script>