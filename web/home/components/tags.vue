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
	height:20px;
  	padding: 10px 10px 10px 10px;
	border-bottom: 1px solid #dcdfe6;
	text-align: center;
}
</style>
