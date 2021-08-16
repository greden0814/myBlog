<template>
  <div class="loginPage">
    <div class="header">welcome to greden's secret blog</div>
    <div class="body">
      <div class="right">
        right
      </div>
      <div class="left">
          <el-button @click="turnToManage">mysqlManage</el-button>
      </div>
      <div class="loginZone center">
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
          <el-button @click="login">login</el-button>
          <el-button @click="signin">signin</el-button>
        </el-form>
        {{ ruleForm }}
      </div>
    </div>
    <div class="footer">please treat me carefully</div>
    <el-dialog>
      
    </el-dialog>
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
    login() {
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
        },
        url: "/api/login",
      }).then((res) => {
        console.log(res);
        this.submit = "already login";
        this.$router.push({
          path:"/pages/myInfo",
          params:{}
        })
      });
    },
    signin() {
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
        this.submit = "already submit";
      });
    },
    turnToManage() {
      this.$router.push({
        path: "/pages/tableManage",
        param: {

        }
      })
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
    height: 500px;
    &>div {
      height: 300px;
    }
    .left {
      float: left;
      width: 300px;
      background-color: darkolivegreen;
    }
    .loginZone {
      // width: 400px;
      background-color: bisque;
    }
    .right {
      width: 300px;
      background-color: darkorange;
      float: right;
    }
  }
  .footer {
    height: 100px;
    background-color: blueviolet;
  }
}
</style>
