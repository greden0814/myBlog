<template>
  <div class="article">
    <div class="title">title</div>
    <div class="discription">discription</div>
    <div class="content">content</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
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
      sessionStorage.setItem("userID", res.content[0].userid);
      this.submit = "already login";
      this.$router.push({
        path: "/pages/myInfo",
        params: {},
      });
    });
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.article {
  width: 1010px;
  background-color: white;
  .title {
    background-color: royalblue;
  }
  .discription {
    background-color: saddlebrown;
  }
  .content {
    background-color: rgb(93, 98, 113);
  }
}
</style>