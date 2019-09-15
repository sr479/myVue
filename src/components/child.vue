<template>
  <div class="child">
    <!-- 这是子组件 -->
    <p>{{content}}</p>
    <p>
      <button v-on:click="handleEvent" value="子组件">点击</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "child",
  props: ["content"],
  data() {
    return {
        msg:'子组件'
    };
  },
  methods: {
    handleEvent(e) {
      this.$emit('ParentRecv',"子组件的消息")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
