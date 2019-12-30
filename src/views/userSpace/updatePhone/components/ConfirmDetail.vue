<template>
  <div style="margin-top: 50px">
    <el-form :model="value" label-width="120px" style="width: 600px" size="small">
      <el-form-item label="手机号: ">
        <el-input v-model="value.oldPhone" :disabled="true"></el-input>
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
    props: {
      value: Object
    },
    methods: {
      handleNext() {
        this.$emit('nextStep')
      }
    }
  }
</script>
