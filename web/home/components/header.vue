<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false" 
    menu-trigger="click"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="首页">西岭项目</el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="解决方案">
      <template #title>解决方案</template>
      <el-menu-item index="微信公众号">微信公众号</el-menu-item>
      <el-menu-item index="微信小程序">微信小程序</el-menu-item>
      <el-menu-item index="Android/IOS应用">Android/IOS应用</el-menu-item>
      <el-menu-item index="Web端解决方案">Web端解决方案</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="合作交流">合作交流</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useHeaderStore } from '../store/header';
const headerStore=useHeaderStore()

const activeIndex = ref('西岭项目')
const handleSelect = (key: string, keyPath: string[]) => {
    headerStore.handleSelect(keyPath) 
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
