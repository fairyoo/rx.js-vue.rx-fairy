<template>
  <div class="esGrammarVariable">  
    app/es/grammar/variable<br/><br/>  
    <hr/><br/>
    let命令  用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。<br/>

    <hr/><br/>

    <hr/><br/>
  </div>
</template>


<script>
export default {
  name: 'esGrammarVariable',
  methods: {
    test () {
    }
  },
  beforeCreate () {
    for (let index = 0; index < 10; index++) {
      console.log(index);
    }
  }
};

</script>