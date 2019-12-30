<template>
  <div style="margin-top: 50px">
    <el-form :model="value" label-width="120px" style="width: 600px" size="small">
      <el-form-item label="新密码: ">
        <el-input v-model="value.newPass" type="password" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="再次输入: ">
        <el-input v-model="newPass2" type="password" placeholder="再次输入新密码"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" size="medium" @click="handleNext">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'NewPassDetail',
    props: {
      value: Object
    },
    data() {
      return {
        newPass2: ''
      }
    },
    methods: {
      handleNext() {
        if (this.value.newPass != this.newPass2) {
          this.$message({
            message: '两次输入的密码不一致',
            type: 'error'
          })
        } else {
          this.$emit('nextStep')
        }
      }
    }
  }
</script>
