<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>我是测试页面</h2>
    <el-button @click="testAuth">测试auth</el-button>
    <el-button @click="logout">退出登录</el-button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎进入vue的世界'
    }
  },
  methods: {
    testAuth() {
      this.$store.dispatch('GetInfo')
    },
    logout() {
      this.$store.dispatch('FedLogout')
    }

  }
}
</script>

<style scoped>
h1,h2 {
  font-weight: normal;
  color: #42b983;
}
</style>
