<template>
  <div style="margin-top: 50px">
    <el-form :model="value" label-width="120px" style="width: 600px" size="small">
      <el-form-item label="新手机号：">
        <el-input v-model="value.newPhone" placeholder="请输入新的手机号"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" size="medium" @click="handlePre">上一步</el-button>
        <el-button type="primary" size="medium" @click="handleNext">发送验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {isvalidPhone} from '../../../../utils/validate'
  import {getPhoneCode} from '../../../../api/phoneCode'
  export default {
    name: 'SendCodeDetail',
    props: {
      value: Object
    },
    methods: {
      handlePre() {
        this.$emit('preStep');
      },
      handleNext() {
        if (!isvalidPhone(this.value.newPhone)) {
          this.$message({
            message: '请输入正确的手机号',
            type: 'error'
          })
        } else {
          getPhoneCode(this.value.newPhone).then(response => {
            this.$message({
              message: '验证码已发送：'+response.data,
              type: 'success'
            })
            console.log(response.data)
            this.$emit('nextStep');
          })
        }
      }
    }
  }
</script>
