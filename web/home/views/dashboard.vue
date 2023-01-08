<template>
 

  <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <el-tab-pane label="管理系统示例一">
		管理系统示例一<br><br>
		
		<el-link type="primary" href="../admin/index.html" target="_blank" >预览系统</el-link>
 
	</el-tab-pane>
    <el-tab-pane label="管理系统示例二">
		管理系统示例二
	</el-tab-pane>
    <el-tab-pane label="管理系统示例三">
		管理系统示例三
	</el-tab-pane>
    <el-tab-pane label="管理系统示例四">
		管理系统示例四
	</el-tab-pane>
  </el-tabs>


</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { useHeaderStore } from '../store/header';


const headerStore=useHeaderStore()

const tabPosition = ref('left')
</script>
<style>

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--left .el-tabs__item{
	width:130px;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  min-width:300px;
  /* height: 100%; */
}
</style>
