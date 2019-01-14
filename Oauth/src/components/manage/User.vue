<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <router-link :to="{name:'modifyUser',params:{form:{}}}">  <el-button style="float:left" type="primary" icon="el-icon-circle-plus-outline">添加</el-button></router-link>
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
import axios from 'axios';

export default {
  name: 'User',
  data () {
    // tableData:[],
    return {
      tableData: [],
      totalDataNumber: 0,
      pageNo: 0,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40],
      index: 0
    };
  },
  mounted: function () {
    this.getUsers(this.pageNo, this.pageSize);
  },
  methods: {
    getUsers: function (page, pageSize) {
      this.$http.get('/system/user', {
        params: {
          page: page - 1,
          pageSize
        }
      }).then(response => {
        this.tableData = response.data.list;
        this.totalDataNumber = response.data.total;
      }, error => {
        this.$message({
          message: error.response.data.message,
          type: 'warning'
        });
        this.tableData = [];
      });
    },
    deleteUser: function (index) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete(`/system/user/${this.tableData[index].id}`)
          .then(response => {
            this.$message({
              message: '删除用户成功',
              type: 'success'
            });
            this.$http.get('/api/system/user').then(response => {
              console.log(response.data);
              this.tableData = response.data.list;
              this.totalDataNumber = response.data.total;
            }, response => {
              console.log('error');
              this.tableData = [];
              this.totalDataNumber = 0;
            });
          }).catch(response => {
            this.$message({
              message: '删除用户失败',
              type: 'warning'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
      });
    },
    searchUser: function (index) {

    },
    handleSizeChange (val) {
      let pageSize = `${val}`;
      this.pageNo = 1;
      this.pageSize = parseInt(pageSize);
      this.getUsers(this.pageNo, this.pageSize);
    },
    handleCurrentChange (val) {
      let pageSize = this.pageSize;
      this.getUsers(parseInt(val), parseInt(pageSize));
    }
  }
};
</script>

<style scoped>

</style>
