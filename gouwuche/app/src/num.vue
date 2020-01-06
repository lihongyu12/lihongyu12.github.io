<template>
	<div>
		<i class="el-icon-remove" v-if="num>0" @click="num--" ></i><span v-if="num>0">{{num}}</span><i class="el-icon-circle-plus" @click="num++"></i>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:0
			}
		}
	}
</script>

<style>
</style>
