<template>
  <div>
    <el-form>
      <el-form-item>
        <el-button @click="handlePre">上一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  export default {
    name: 'VerifyDetail',
    methods: {
      handlePre() {
        this.$emit('preStep');
      }
    }
  }
</script>
