<template>
    <div class="article">
        <el-form ref="articleForm" :model="articleForm" label-position="left" label-width="100px">
            <el-form-item label="title" prop="title">
                <el-input v-model="title"></el-input>
            </el-form-item>
        <el-form-item label="content" prop="content">
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
    }
</style>