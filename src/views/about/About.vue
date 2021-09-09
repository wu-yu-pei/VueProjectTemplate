<template>
    <div class="about">
      <h1>{{message}}</h1>
    </div>
  </template>
  
  <script>
  export default {
    props: {
  
    },
    components: {
      
    },
    setup() {
        return {
            message:'About'
        }
    },
  };
  </script>
  
  <style lang="less" scoped>
      .about {

      }
  </style>