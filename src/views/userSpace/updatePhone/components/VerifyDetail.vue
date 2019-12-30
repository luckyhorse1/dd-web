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
  import {isvalidPhonecode} from '../../../../utils/validate'
  import {checkPhoneCode} from '../../../../api/phoneCode'
  import {updatePhone} from '../../../../api/userInfo'
  export default {
    name: 'VerifyDetail',
    props: {
      value: Object
    },
    methods: {
      handlePre() {
        this.$emit('preStep');
      },
      handleFinish() {
        if (!isvalidPhonecode(this.value.phoneCode)) {
          this.$message({
            message: '请输入正确的验证码',
            type: 'error'
          })
        } else {
          checkPhoneCode(this.value.newPhone, this.value.phoneCode).then(response => {
            updatePhone(this.value.newPhone).then(response =>{
              this.$message({
                message: '修改成功, 请重新登录',
                type: 'success'
              })
              this.$emit('finishCommit')
            })
          })
        }
      }
    }
  }
</script>
