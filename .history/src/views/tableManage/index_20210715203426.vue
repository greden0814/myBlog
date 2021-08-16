<template>
  <div class="dbManage">
    <div class="dbManage">
      <el-form ref="dbForm" :model="dbForm" label-width="100px" inline>
        <el-form-item label="dbName: ">
          <el-input v-model="dbForm.tableName" placeholder="username" />
        </el-form-item>
        <el-button @click="submitDbForm">submitDbForm</el-button>
      </el-form>
    </div>
    <div class="tableManage">
      <el-form ref="tableForm" :model="tableForm" label-width="100px" inline>
        <el-form-item label="tableName: ">
          <el-input v-model="tableForm.tableName" placeholder="username" />
        </el-form-item>
        <el-form-item label="sql: ">
          <el-input v-model="tableForm.sql" placeholder="password" />
        </el-form-item>
        <el-form-item label="phonenum: ">
          <el-input v-model="tableForm.phonenum" placeholder="password" />
        </el-form-item>
        <el-button @click="submitTableForm">submitTableForm</el-button>
      </el-form>
    </div>
    <div>{{ submit }}</div>
    <div class="returnBtn">
        <el-button @click="returnLogin">return</el-button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            submit:"",
            dbForm:{
                tableName:""
            },
            tableForm:{
                tableName:"",
                sql:"",
            },
        }
    },
    methods: {
        submitDbForm() {
            this.$axios({
                method: "post",
                xhrFields: {
                    withCredentials: true,
                },
                headers: {
                    // "Content-Type" : 'application/x-www-form-urlencoded'
                    "Content-Type": "application/json",
                },
                data: {
                    tableName: this.dbForm.tableName,
                },
                url: "http://localhost:3000/api/createdb",
            }).then((res) => {
                console.log(res);
                this.submit = `db '${this.dbForm.tableName}' has been created `;
            });
        },
        submitTableForm() {
            this.submit = "already submit";
            this.$axios({
                method: "get",
                xhrFields: {
                withCredentials: true,
                },
                headers: {
                // "Content-Type" : 'application/x-www-form-urlencoded'
                "Content-Type": "application/json",
                },
                // data: {
                //   username: this.ruleForm.username,
                //   password: this.ruleForm.password,
                //   phonenum: this.ruleForm.phonenum,
                // },
                url: "http://localhost:3000/api/createusertable",
            }).then((res) => {
                console.log(res);
            });
        },
        returnLogin() {
            this.$router.push({
                path:"/"
            })
        }
    }
};
</script>
<style lang="less" scoped>
</style>