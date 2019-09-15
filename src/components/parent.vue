<template>
  <div class="parent">
      <div>
          这是父组件
          <Child :content="msg"></Child>
          <Child v-bind:content="data" v-on:ParentRecv="ParentRecv"></Child>
      </div>
      
  </div>
</template>

<script>
import Child from "./child.vue"
export default {
  name: 'parent',
  components:{
      Child
  },
  data () {
    return {
      msg:"this is parent",
      data : ""
    }
  },
  methods:{
      ParentRecv(msg){
          this.data=msg;

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
