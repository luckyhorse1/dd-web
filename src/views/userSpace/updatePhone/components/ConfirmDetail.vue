<template>
  <div style="margin-top: 50px">
    <el-form label-width="120px" style="width: 600px" size="small">
      <el-form-item label="手机号: ">
        <el-input v-model="phone" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" size="medium" @click="handleNext">确认修改手机号</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    name: 'ConfirmDetail',
    data() {
      return {
        phone: '176330907915'
      }
    },
    methods: {
      handleNext() {
        this.$emit('nextStep')
        console.log('nextStep')
      }
    }
  }
</script>
