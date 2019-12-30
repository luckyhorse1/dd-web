<template>
  <div style="margin-top: 50px">
    <el-form :model="value" label-width="120px" style="width: 600px" size="small">
      <el-form-item label="验证码：">
        <el-input v-model="value.phoneCode" placeholder="请输入四位验证码"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" size="medium" @click="handlePre">上一步</el-button>
        <el-button type="primary" size="medium" @click="handleFinish">验证</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {checkPhoneCodeBySelf} from '../../../../api/phoneCode'
  import {updatePass} from '../../../../api/userInfo'

  export default {
    name: 'VerifyDetail',
    props: {
      value: Object
    },
    methods: {
      handlePre() {
        this.$emit('preStep')
      },
      handleFinish() {
        checkPhoneCodeBySelf(this.value.phoneCode).then(() =>{
          updatePass(this.value.newPass).then(() =>{
            this.$message({
              message: '密码修改成功, 请重新登录',
              type: 'success'
            })
            this.$emit('finishCommit')
          })
        })
      }
    }
  }
</script>
