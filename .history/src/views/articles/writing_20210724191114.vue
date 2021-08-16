<template>
    <div class="article">
        <el-form ref="articleForm" :model="articleForm">
            <el-form-item label="title" prop="title" class="title">
                <el-input v-model="title"></el-input>
            </el-form-item>
        <el-form-item label="content" prop="content" class="content">
            <el-input v-model="content" type="textarea" rows="10"></el-input>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            articleForm: {
                title: "",
                content: ""
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .article {
        width: 1010px;
        background-color: white;
        .title {
            // background-color: royalblue;
        }
        .content {
            // background-color: rgb(93, 98, 113);
        }
    }
</style>