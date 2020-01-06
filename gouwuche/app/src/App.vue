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
		},
		created(){
			(function () {
			        var  styleN = document.createElement("style");
			        var width = document.documentElement.clientWidth/16;
			        styleN.innerHTML = 'html{font-size:'+width+'px!important}';
			        document.head.appendChild(styleN);
			    })();
			app.style.height=window.screen.height
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
