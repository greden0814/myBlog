<template>
  <div class="myblog">
    <div class="header"></div>
    <div class="body">
      <div class="left"></div>
      <div class="middle"></div>
      <div class="right"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.myblog {
  .header {
    height: 100px;
    background-color: aqua;
  }
  .body {
    display: flex;
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
    }
  }
  .footer {
    height: 100px;
    background-color: blueviolet;
  }
}
</style>