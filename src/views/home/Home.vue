<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>
  
<script>
export default {
  props: {},
  components: {},
  setup() {
    return {
      message: "Home",
    };
  },
};
</script>
  
<style lang="less" scoped>
.home {
}
</style>