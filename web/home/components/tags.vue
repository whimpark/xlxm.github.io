<template>
 <div class="header-select-value">
	  {{headerStore.selectValue}}
	  
  </div>
</template>

<script setup lang="ts">
 
import { useHeaderStore } from '../store/header';
const headerStore=useHeaderStore()
 
</script>

<style>
.header-select-value{
	color: #6b778c;
  	font-size: 16px;
  	padding: 10px 10px 10px 160px;
	border-bottom: 1px solid #dcdfe6;
}
</style>
