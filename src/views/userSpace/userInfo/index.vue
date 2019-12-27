<template>
  <div class="un-handle-layout">
    <div class="layout-title">个人信息</div>
    <div class="un-handle-content">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">姓名</span>
            <span style="float: right" class="color-danger">{{userInfo[1]}}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">手机号</span>
            <span style="float: right" class="color-danger">{{userInfo[0]}}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">微信账号</span>
            <span style="float: right" class="color-danger">wx-adasd</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">性别</span>
            <span style="float: right" class="color-danger">男</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">年龄</span>
            <span style="float: right" class="color-danger">24</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="un-handle-item">
            <span class="font-medium">注册日期</span>
            <span style="float: right" class="color-danger">{{userInfo[2]}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
  import {getUserInfo} from '@/api/userInfo'

  export default {
    name: 'home',
    data() {
      return {
        userInfo: ['暂无', '暂无', '暂无']
      }
    },
    created () {
      this.getUserInfo()
    },
    methods: {
      getUserInfo() {
        getUserInfo().then(response => {
          this.userInfo = response.data
        })
      }
    }
  }
</script>

<style scoped>
  .app-container {
    margin-top: 40px;
    margin-left: 120px;
    margin-right: 120px;
  }

  .address-layout {
  }

  .total-layout {
    margin-top: 20px;
  }

  .total-frame {
    border: 1px solid #DCDFE6;
    padding: 20px;
    height: 100px;
  }

  .total-icon {
    color: #409EFF;
    width: 60px;
    height: 60px;
  }

  .total-title {
    position: relative;
    font-size: 16px;
    color: #909399;
    left: 70px;
    top: -50px;
  }

  .total-value {
    position: relative;
    font-size: 18px;
    color: #606266;
    left: 70px;
    top: -40px;
  }

  .un-handle-layout {
    margin-top: 20px;
    border: 1px solid #DCDFE6;
  }

  .layout-title {
    color: #606266;
    padding: 15px 20px;
    background: #F2F6FC;
    font-weight: bold;
  }

  .un-handle-content {
    padding: 20px 40px;
  }

  .un-handle-item {
    border-bottom: 1px solid #EBEEF5;
    padding: 10px;
  }

  .overview-layout {
    margin-top: 20px;
  }

  .overview-item-value {
    font-size: 24px;
    text-align: center;
  }

  .overview-item-title {
    margin-top: 10px;
    text-align: center;
  }

  .out-border {
    border: 1px solid #DCDFE6;
  }

  .statistics-layout {
    margin-top: 20px;
    border: 1px solid #DCDFE6;
  }
  .mine-layout {
    position: absolute;
    right: 140px;
    top: 107px;
    width: 250px;
    height: 235px;
  }
  .address-content{
    padding: 20px;
    font-size: 18px
  }
</style>
