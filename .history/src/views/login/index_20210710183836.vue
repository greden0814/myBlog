<template>
  <div class="loginPage">
    <div class="header">welcome to greden's secret blog</div>
    <div class="body">
      <div class="loginZone">
        <el-form>
          <el-form-item label="username: ">
            <el-input v-model="username" placeholder="username" />
          </el-form-item>
          <el-form-item label="password: ">
            <el-input v-model="password" placeholder="password" />
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="footer">please treat me carefully</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {},
  methods: {},
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
