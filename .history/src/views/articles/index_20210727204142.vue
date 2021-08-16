<template>
  <div class="articleList">
    <div
      class="article"
      v-for="article in articleList"
      :key="article.articleid"
      @click="turnToInfo(article.articleid)"
    >
      <div class="title">{{ article.title }}</div>
      <div class="discription">{{ article.discription }}</div>
      <div class="content">{{ article.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleList: [],
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
    getArticleList() {
      this.$axios({
        method: "post",
        data: {
          userid: sessionStorage.getItem("userID"),
        },
        url: "/api/getArticleList",
      }).then((res) => {
        console.log(res);
        if (res.success) {
          this.articleList = res.content;
        }
      });
    },
    turnToInfo(articleid) {
        console.log(articleid)
      this.$router.push({
        path: "/pages/articleInfo",
        query: {articleid:articleid},
      });
    },
  },
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