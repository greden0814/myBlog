<template>
  <div class="loginPage">
    <div class="header">welcome to greden's secret blog</div>
    <div class="body">
      <div class="loginZone">
        <el-form ref="ruleForm" :model="ruleForm" label-width="80" inline>
          <el-form-item label="username: ">
            <el-input v-model="ruleForm.username" placeholder="username" />
          </el-form-item>
          <el-form-item label="password: ">
            <el-input v-model="ruleForm.password" placeholder="password" />
          </el-form-item>
          <el-button @click="submitForm">submit</el-button>
        </el-form>
        {{ submit }}
      </div>
    </div>
    <div class="footer">please treat me carefully</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      submit: ""
    };
  },
  created() {},
  methods: {
      submitForm() {
          this.submit = "already submit"
        this.$axios()
      }
  },
};
</script>

<style lang="less" scoped>
.loginPage {
  .header {
    height: 100px;
    background-color: aqua;
  }
  .body {
    .loginZone {
      height: 200px;
      width: 400px;
      background-color: bisque;
    }
  }
  .footer {
    height: 100px;
    background-color: blueviolet;
  }
}
</style>
