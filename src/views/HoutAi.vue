<template>
  <div class="box">
    <el-container style="height: 100vh">
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
        <el-menu :router="true">

          <el-menu-item class="item" index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <!-- 导航一 -->
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-message"></i>导航一</template
            >

            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-2">选项1</el-menu-item>
              <el-menu-item index="2-3">选项2</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="分组2">
              <el-menu-item index="2-4">选项3</el-menu-item>
            </el-menu-item-group>

            <el-submenu index="2-5">
              <template slot="title">选项4</template>
              <el-menu-item index="2-5-1">选项1-4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <!--  -->

          <!-- 导航二 -->

          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-message"></i>导航二</template
            >

            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
              <el-menu-item index="3-4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!--  -->
        </el-menu>
      </el-aside>

    <!-- 头部 -->
      <el-container>

        <el-header class="head">
          <!-- 头部导航面包屑 -->
          <el-breadcrumb  separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb>
            <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
          </el-breadcrumb>
          <!--  -->
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <span>王小虎</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          <router-view></router-view>  
        </el-main>
      </el-container>
      <!--  -->

    </el-container>
  </div>
</template>

<script>
export default {
  name: "houtai",
};
</script>

<style scoped>
.head{
  text-align: right;
  font-size: 12px;
  border-bottom:1px solid black;
  display: flex;
  justify-content: space-between;
    align-items: center;
}
.el-breadcrumb{
  display: flex;
}
</style>