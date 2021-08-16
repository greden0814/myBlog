<template>
    <div class="article">
        <div class="title">
            <el-input></el-input>
        </div>
        <div class="content">
            <el-input type="textarea" rows="10"></el-input>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .article {
        width: 1010px;
        background-color: white;
        .title {
            background-color: royalblue;
        }
        .content {
            background-color: rgb(93, 98, 113);
        }
    }
</style>