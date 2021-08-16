<template>
  <div class="myInfo">
    <div class="header">header</div>
    <div class="body">
      <div class="left">left</div>
      <div class="middle">middle</div>
      <div class="right">right</div>
    </div>
    <div class="footer">footer</div>
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
.myInfo {
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