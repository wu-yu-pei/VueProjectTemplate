<template>
  <div class="helloword">
    <h1>{{ message }}</h1>
  </div>
</template>
  
<script>
export default {
  props: {},
  components: {},
  setup() {
    return {
      message: "HelloWord",
    };
  },
};
</script>
  
<style lang="less" scoped>
.helloword {
}
</style>