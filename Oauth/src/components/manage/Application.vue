<template>
  <div align="left">
    <el-row>
      <el-col :span="16" :offset="4">
        <router-link :to="{name:'modify',params:{form:{}}}">  <el-button style="float:left" type="primary" icon="el-icon-circle-plus-outline">添加</el-button></router-link>
        <el-table :data="tableData" border max-height="450">
          <el-table-column type="index" label="#" align="center" style="width: 5%"></el-table-column>
          <el-table-column prop="username" label="登录用户名" align="center" style="width: 15%"></el-table-column>
          <el-table-column prop="organization" label="所属机构" align="center" style="width: 15%"></el-table-column>
          <el-table-column prop="phone" label="手机号" align="center" style="width: 15%"></el-table-column>
          <el-table-column prop="email" label="邮箱" align="center" style="width: 15%"></el-table-column>
          <el-table-column prop="creatorId" label="关联模式" align="center" style="width: 15%"></el-table-column>
          <el-table-column label="操作" align="center" style="width: 20%">
            <template slot-scope="scope">
              <router-link :to="{name:'modifyUser',params:{form:tableData[scope.$index]}}"><i class="el-icon-edit" title="修改" style="width: 50px"></i>
              </router-link><i @click="deleteUser(scope.$index)" class="el-icon-delete" title="删除" style="width: 50px"></i></template>
          </el-table-column>
        </el-table>
        <div class="block" style="float: right">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageNo"
            :page-sizes="pageSizes"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalDataNumber">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getApplication} from '../../service/manager';

export default {
  name: 'Application',
  data () {
    return {
      tableData: []
    };
  },
  mounted: function () {
    this.getApplication();
  },
  methods: {
    getApplication: function () {
      getApplication().then(response => {
        this.tableData = response.data.list;
        this.totalDataNumber = response.data.total;
      }, error => {
        this.$message({
          message: error.response.data.message,
          type: 'warning'
        });
        this.tableData = [];
      });
    }

  }
};
</script>

<style scoped>

</style>
