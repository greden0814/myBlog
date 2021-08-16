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
        <el-form-item label="password: ">
          <el-input v-model="tableForm.password" placeholder="password" />
        </el-form-item>
        <el-form-item label="phonenum: ">
          <el-input v-model="tableForm.phonenum" placeholder="password" />
        </el-form-item>
        <el-button @click="submitTableForm">submitTableForm</el-button>
      </el-form>
    </div>
    {{ submit }}
  </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        submitDbForm() {

        },
        submitTableForm() {
            
        }
    }
};
</script>
<style lang="less" scoped>
</style>