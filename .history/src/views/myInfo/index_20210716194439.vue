<template>
  <div class="myInfo">
    <div class="header">header</div>
    <div class="body">
      <div class="left">left</div>
      <div class="middle">middle</div>
      <div class="right">right
        <div class="pic">pic</div>
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