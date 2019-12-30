<template>
  <div style="margin-top: 50px">
    <el-form label-width="120px" style="width: 600px" size="small">
      <el-form-item style="text-align: center">
        <el-button type="primary" size="medium" @click="handlePre">上一步</el-button>
        <el-button type="primary" size="medium" @click="handleNext">发送验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getPhoneCodeBySelf} from '../../../../api/phoneCode'

  export default {
    name: 'SendCodeDetail',
    methods: {
      handlePre() {
        this.$emit('preStep')
      },
      handleNext() {
        getPhoneCodeBySelf().then(response => {
          this.$message({
            message: '验证码获取成功：'+response.data,
            type: 'success'
          })
          console.log(response.data)
          this.$emit('nextStep')
        })
      }
    }
  }
</script>
