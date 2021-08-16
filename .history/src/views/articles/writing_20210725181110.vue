<template>
  <div class="article">
    <el-form ref="articleForm" :model="articleForm" label-width="100px">
      <el-form-item label="title" prop="title">
        <el-input v-model="articleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="content" prop="content">
        <el-input
          v-model="articleForm.content"
          type="textarea"
          rows="10"
          resize="none"
        ></el-input>
      </el-form-item>
      <footer class="footer">
        <el-button type="primary" @click="submitArticle">提交</el-button>
        <el-button @click="goBack">返回</el-button>
      </footer>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleForm: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    goBack() {
      console.log("goBack");
    },
    submitArticle() {
      console.log("submitArticle");
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
          userid: sessionStorage.getItem("userID"),
          title: this.articleForm.title,
          content: this.articleForm.content,
        },
        url: "/api/articleWriting",
      }).then((res) => {
        console.log(res);
        this.submit = "already wrote";
        this.$router.push({
          path: "/pages/articles",
          params: {},
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.article {
  width: 1010px;
  background-color: white;
  padding: 20px;
  .footer {
    text-align: center;
  }
}
</style>