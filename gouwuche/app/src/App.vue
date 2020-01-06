<template>
	<div id="app" style="position:relative;">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		
	</div>
</template>

<script>
	
	
	export default {
		name: "app",
		data() {
			return {}
		}
		
	};

</script>

<style>
	*{
		margin: 0px;
		padding: 0px;
		text-decoration:none;
	}
	.clearfix::before,
	.clearfix::after {
		content: "";
		display: table;
	}

	.clearfix::after {
		clear: both;
	}

	
</style>
