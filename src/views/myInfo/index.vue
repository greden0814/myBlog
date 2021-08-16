<template>
  <div class="myInfo">
    <div class="header">header</div>
    <div class="body">
      <div class="left">menu</div>
      <div class="middle">
        <article-list/>
      </div>
      <div class="right">
        right
        <div class="pic">pic</div>
        <el-button @click="turnToArticleWriting">articleWriting</el-button>
      </div>
    </div>
    <div class="footer">footer</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
     'article-list': () => import('@/views/articles')
  },
  methods: {
    turnToArticleWriting() {
      this.$router.push({
        path: "/pages/articles/writing",
        params: {},
      });
    },
  },
};
</script>
<style lang="less" scoped>
.myInfo {
  .header {
    height: 100px;
    background-color: aqua;
  }
  .body {
    display: flex;
    height: 400px;
    .left {
      background-color: coral;
      flex: 2;
    }
    .middle {
      background-color: cornflowerblue;
      flex: 8;
    }
    .right {
      background-color: darkolivegreen;
      flex: 2;
      .pic {
        margin: 20px auto;
        width: 150px;
        height: 150px;
        background-color: azure;
      }
    }
  }
  .footer {
    height: 100px;
    background-color: blueviolet;
  }
}
</style>