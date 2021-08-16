<template>
  <div class="articleList">
    <div class="article" v-for="articles in articleList" :key="articles.id">
        <div class="title">{{ articles.title }}</div>
        <div class="discription">{{ articles.discription }}</div>
        <div class="content">{{ articles.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        articleList: []
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