<template>
  <el-card class="form-container" shadow="never">
    <el-form :model="userInfo"
             ref="userInfoForm"
             label-width="150px">
      <el-form-item label="姓名: ">
        <el-input v-model="userInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号: ">
        <el-input v-model="userInfo.phone" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="微信号: ">
        <el-input v-model="userInfo.wx"></el-input>
      </el-form-item>
      <el-form-item label="性别：">
        <el-radio-group v-model="userInfo.sex">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
          <el-radio :label="2">私密</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄: ">
        <el-input v-model="userInfo.age"></el-input>
      </el-form-item>

      <el-form-item label="注册日期: ">
        <el-input v-model="userInfo.createtime" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>


<script>
  import {getUserInfo, updateUserInfo} from '@/api/userInfo'

  const defaultUserInfo = {
    name: '暂无',
    phone: '176-xxxx-xxxx',
    wx: '暂无',
    sex: 0,
    age: '0',
    createtime: '2000-00-00'
  };
  export default {
    name: 'userInfo',
    data() {
      return {
        userInfo: Object.assign({}, defaultUserInfo)
      }
    },
    created () {
      this.getUserInfo()
    },
    methods: {
      getUserInfo() {
        getUserInfo().then(response => {
          this.userInfo.phone = response.data[0]
          this.userInfo.name = response.data[1]
          this.userInfo.createtime = response.data[2]
        })
      },

      onSubmit() {
        updateUserInfo(this.userInfo.name).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>

