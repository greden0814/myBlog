<template>
  <div class="articleInfo">
    <div class="title">{{ article.title }}</div>
    <div class="discription">{{ article.discription }}</div>
    <div class="content">{{ article.content }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        article: {
            title: "",
            discription: "",
            content: "",
        }
    };
  },
  created() {
    this.getArticleInfo();
    console.log(this.$route);
  },
  methods: {
    getArticleInfo() {
      this.$axios({
        method: "post",
        data: {
          articleid: this.$route.query.articleid,
        },
        url: "/api/getArticleInfo",
      }).then((res) => {
        console.log(res);
        if (res.success) {
          this.articleList = res.content[0];
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.article {
  width: 1010px;
  background-color: white;
}
</style>