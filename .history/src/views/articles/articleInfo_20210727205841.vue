<template>
  <div class="articleInfo">11
    <div class="title">{{ article.title }}</div>
    <div class="discription">{{ article.discription }}</div>
    <div class="content">{{ article.content }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        enter: this.$route.params.articleid
    };
  },
  watch: {
      enter() {
    console.log(this.$route)

      }
  },
  activated () {
    this.getArticleInfo();
    console.log(this.$route)
  },
  methods: {
    getArticleInfo() {
      this.$axios({
        method: "post",
        data: {
          articleid: this.$route.params.articleid,
        },
        url: "/api/getArticleInfo",
      }).then((res) => {
        console.log(res);
        if (res.success) {
          this.articleList = res.content;
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