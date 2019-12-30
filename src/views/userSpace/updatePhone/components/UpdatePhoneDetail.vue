<template>
  <el-card class="form-container" shadow="never">
    <el-steps :active="active" align-center>
      <el-step title="确认修改"></el-step>
      <el-step title="发送验证码"></el-step>
      <el-step title="验证"></el-step>
    </el-steps>
    <confirm-detail
      v-show="showStatus[0]"
      v-model="phoneParam"
      @nextStep="nextStep">
    </confirm-detail>
    <send-code-detail
      v-show="showStatus[1]"
      v-model="phoneParam"
      @preStep="preStep"
      @nextStep="nextStep">
    </send-code-detail>
    <verify-detail
      v-show="showStatus[2]"
      v-model="phoneParam"
      @preStep="preStep"
      @finishCommit="finishCommit">
    </verify-detail>
  </el-card>
</template>

<script>
  import ConfirmDetail from './ConfirmDetail';
  import SendCodeDetail from './SendCodeDetail'
  import VerifyDetail from './VerifyDetail'
  import {getUserInfo} from '../../../../api/userInfo'

  const defaultParam = {
    oldPhone: '',
    newPhone: '',
    phoneCode: ''
  };
  export default {
    name: 'UpdatePhoneDetail',
    components: {ConfirmDetail, SendCodeDetail, VerifyDetail},
    data() {
      return {
        active: 0,
        showStatus: [true, false, false],
        phoneParam: Object.assign({}, defaultParam)
      }
    },
    created() {
      getUserInfo().then(response => {
        this.phoneParam.oldPhone = response.data[0]
      })
    },
    methods: {
      hideAll() {
        for (let i=0; i<this.showStatus.length; i++) {
          this.showStatus[i] = false;
        }
      },
      preStep() {
        if (this.active>0 && this.active < this.showStatus.length) {
          this.active--;
          this.hideAll();
          this.showStatus[this.active] = true;
        }
      },
      nextStep() {
        if (this.active < this.showStatus.length-1) {
          this.active++;
          this.hideAll();
          this.showStatus[this.active] = true;
        }
      },

      finishCommit() {
        this.$store.dispatch('Logout').then(() => {
          location.reload()
        })
      }
    }

  }
</script>
