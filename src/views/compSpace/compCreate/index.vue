<template>
  <div>
    <el-card class="form-container" shadow="never">
      <el-button type="primary" size="medium" @click="handleNext" v-if="hideButton">确认创建公司</el-button>

      <el-form :model="compInfo"
               label-width="150px"
               v-if="hideForm">
        <el-form-item label="姓名: ">
          <el-input v-model="compInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号: ">
          <el-input v-model="compInfo.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="微信号: ">
          <el-input v-model="compInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio-group v-model="compInfo.name">
            <el-radio label="0">男</el-radio>
            <el-radio label="1">女</el-radio>
            <el-radio label="2">私密</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄: ">
          <el-input v-model="compInfo.name"></el-input>
        </el-form-item>

        <el-form-item label="注册日期: ">
          <el-input v-model="compInfo.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>

</template>

<script>

  import {checkForCreateComp} from '../../../api/comp'

  const defaultCompInfo = {
    name: '暂无',
    createTime: ''
  };

  export default {
    name: 'CompCreate',
    data() {
      return {
        compInfo: Object.assign({}, defaultCompInfo),
        hideButton: true,
        hideForm: false
      }
    },
    methods: {
      handleNext() {
        checkForCreateComp().then(response => {
          this.hideButton = false
          this.hideForm = true

        })
      }
    }
  }
</script>
