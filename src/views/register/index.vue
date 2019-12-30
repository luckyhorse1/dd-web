<template>
  <div>
    <el-card class="register-form-layout">
      <el-form :model="registerForm"
               :rules="registerRules">
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px; height: 56px; color: #409EFF"></svg-icon>
        </div>
        <h2 class="register-title color-main">注册新用户</h2>
        <el-form-item prop="phone">
          <el-input type="text" v-model="registerForm.phone" placeholder="请输入手机号">
            <template slot="prepend">手机号</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="phonecode">
          <el-input type="text" v-model="registerForm.phoneCode" placeholder="请输入验证码">
            <template slot="prepend">验证码</template>
            <el-button :disabled="disable" slot="append" @click="getCode"  style="background-color: #409EFF; color: white">{{getCodeText}}</el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="name">
          <el-input type="text" v-model="registerForm.name" placeholder="请输入姓名">
            <template slot="prepend">&nbsp;&nbsp;&nbsp;&nbsp;姓名</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="registerForm.password" placeholder="请输入密码">
            <template slot="prepend">&nbsp;&nbsp;&nbsp;&nbsp;密码</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input type="password" v-model="registerForm.password2"placeholder="再次输入密码">
            <template slot="prepend">&nbsp;&nbsp;&nbsp;&nbsp;确认</template>
          </el-input>
        </el-form-item>


        <el-form-item style="text-align: center">
          <el-button type="primary" @click.native.prevent="acceptAndRegister">同意并注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import {isvalidPhone, isvalidPhonecode, isvalidPassword} from '../../utils/validate'
  import {Message} from 'element-ui'
  import {register} from '../../api/register'
  import {getPhoneCode} from '../../api/phoneCode'

  export default {
    name: 'register',
    data() {
      const validatePhone = (rule, value, callback) => {
        if (!isvalidPhone(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      };

      const validatePhonecode = (rule, value, callback) => {
        if (!isvalidPhonecode(value)) {
          callback(new Error('请输入4位数字验证码'))
        } else {
          callback()
        }
      };

      const validateName = (rule, value, callback) => {
        if (value.length <= 0) {
          callback(new Error('姓名不能为空'))
        } else {
          callback()
        }
      };

      const validatePassword = (rule, value, callback) => {
        if (!isvalidPassword(value)) {
          callback(new Error('请输入6-16位字母和数字的组合'))
        } else {
          callback()
        }
      };

      const validatePassword2 = (rule, value, callback) => {
        if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback()
        }
      };
      return {
        count: 6,
        getCodeText: '获取验证码',
        disable: false,
        registerForm: {
          phone: '',
          phoneCode: '',
          name: '',
          password: '',
          password2: ''
        },
        registerRules: {
          phone: [{required: true, trigger: 'blur', validator: validatePhone}],
          phoneCode: [{required: true, trigger: 'blur', validator: validatePhonecode}],
          name: [{required: true, trigger: 'blur', validator: validateName}],
          password: [{required: true, trigger: 'blur', validator: validatePassword}],
          password2: [{required: true, trigger: 'blur', validator: validatePassword2}]
        }
      }
    },

    methods: {
      getCode() {
        if (!isvalidPhone(this.registerForm.phone)) {
          Message({
            message: '请输入正确的手机号',
            type: 'error',
            duration: 3 * 1000
          })
          return
        }

        getPhoneCode(this.registerForm.phone).then(response => {
          console.log(response.data)
        }).catch(() => {
          console.log('error')
        })

        var countDown = setInterval(() => {
          if (this.count < 1) {
            this.disable = false
            this.getCodeText = '获取验证码'
            this.count = 6
            clearInterval(countDown)
          } else {
            this.disable = true
            this.getCodeText = this.count-- + 's后重发'
          }
        }, 1000)
      },

      acceptAndRegister() {
        register(this.registerForm.phone, this.registerForm.password, this.registerForm.phoneCode, this.registerForm.name).then(response => {
          this.$message({
            message: '注册成功',
            type: 'success'
          })
          this.$router.push({path: '/login'})
        })
      }
    }
  }

</script>

<style scoped>
  .register-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
  }

  .register-title {
    text-align: center;
  }

  .register-item {
    font-size: 14px;
  }
</style>
