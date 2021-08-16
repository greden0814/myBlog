<template>
  <div class="loginPage">
    <div class="header">welcome to greden's secret blog</div>
    <div class="body">
      <div class="loginZone">
        <el-form ref="ruleForm" :model="ruleForm" label-width="100px" inline>
          <el-form-item label="username: ">
            <el-input v-model="ruleForm.username" placeholder="username" />
          </el-form-item>
          <el-form-item label="password: ">
            <el-input v-model="ruleForm.password" placeholder="password" />
          </el-form-item>
          <el-form-item label="phonenum: ">
            <el-input v-model="ruleForm.phonenum" placeholder="password" />
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
        phonenum: "",
      },
      submit: "",
    };
  },
  created() {},
  methods: {
    submitForm() {
      this.submit = "already submit";
      this.$axios({
        method: "post",
        xhrFields: {
          withCredentials: true,
        },
        headers: {
          // "Content-Type" : 'application/x-www-form-urlencoded'
          "Content-Type": "application/json",
        },
        data: {
          username: this.ruleForm.username,
          password: this.ruleForm.password,
          phonenum: this.ruleForm.phonenum,
        },
        url: "http://localhost:3000/api/signin",
      }).then((res) => {
        console.log(res);
      });
    },
    createUserTable() {
      this.submit = "already submit";
      this.$axios({
        method: "get",
        xhrFields: {
          withCredentials: true,
        },
        headers: {
          // "Content-Type" : 'application/x-www-form-urlencoded'
          "Content-Type": "application/json",
        },
        // data: {
        //   username: this.ruleForm.username,
        //   password: this.ruleForm.password,
        //   phonenum: this.ruleForm.phonenum,
        // },
        url: "http://localhost:3000/api/createusertable",
      }).then((res) => {
        console.log(res);
      });
    },
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
