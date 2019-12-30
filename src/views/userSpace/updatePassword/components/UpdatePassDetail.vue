<template>
  <el-card class="form-container" shadow="never">
    <el-steps :active="active" align-center>
      <el-step title="输入新密码"></el-step>
      <el-step title="发送验证码"></el-step>
      <el-step title="验证"></el-step>
    </el-steps>
    <new-pass-detail
      v-show="showStatus[0]"
      v-model="passParam"
      @nextStep="nextStep">
    </new-pass-detail>
    <send-code-detail
      v-show="showStatus[1]"
      v-model="passParam"
      @preStep="preStep"
      @nextStep="nextStep">
    </send-code-detail>
    <verify-detail
      v-show="showStatus[2]"
      v-model="passParam"
      @preStep="preStep"
      @finishCommit="finishCommit">
    </verify-detail>
  </el-card>
</template>

<script>
  import NewPassDetail from './NewPassDetail'
  import SendCodeDetail from './SendCodeDetail'
  import VerifyDetail from './VerifyDetail'

  const defaultParam = {
    newPass: '',
    phoneCode: ''
  }
  export default {
    name: 'UpdatePassDetail',
    components: {VerifyDetail, SendCodeDetail, NewPassDetail},
    data() {
      return {
        active: 0,
        showStatus: [true, false, false],
        passParam: Object.assign({}, defaultParam)
      }
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
