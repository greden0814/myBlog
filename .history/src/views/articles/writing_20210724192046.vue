<template>
    <div class="article">
        <el-form ref="articleForm" :model="articleForm" label-width="100px">
            <el-form-item label="title" prop="title">
                <el-input v-model="articleForm.title"></el-input>
            </el-form-item>
        <el-form-item label="content" prop="content">
            <el-input v-model="articleForm.content" type="textarea" rows="10" resize="none"></el-input>
        </el-form-item>
        <footer class="footer">
            <el-button type="primary" click="submitArticle">提交</el-button>
            <el-button click="goBack">返回</el-button>
        </footer>
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
    },
    methods: {
        goBack() {
            console.log('goBack')
        },
        submitArticle() {
            console.log('submitArticle')
        }
    }
}
</script>
<style lang="less" scoped>
    .article {
        width: 1010px;
        background-color: white;
        padding: 20px;
        .footer {
            text-align: center;
        }
    }
</style>