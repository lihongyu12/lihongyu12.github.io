<template>
	<div style="height: 28.222222rem;overflow: hidden;overflow-y: scroll;">
		<div><a href="#/"><</a><span>确认订单</span></div>
		<div>
			<div v-for="i in get_arr" style="margin-bottom: 0.296296rem;border-bottom: 1px solid #000000;">
				 <img :src="i.img" alt="" style="width=4.05926rem;  height: 4.05926rem;" > 
				 <p style="font-size: 0.444444rem;">{{i.title}}</p>
				 <p style="font-size: 0.444444rem;"><span>￥<span>{{i.money}}</span></span>X<span>{{i.num}}</span></p>
			</div>
		</div>
		<div style="position: absolute;bottom: 0px;left: 0px;background: #0D3349;width: 100%;height: 2.029629rem;line-height: 2.029629rem;font-size: 0.592592rem;color: #fff;">
			<span>￥<span>{{get_zong}}</span></span><a style="float: right;width: 25%;line-height:2.029629rem ;background: #006600; text-align: center;color: #fff;" href="#/no2">去支付</a>
		</div>
	</div>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'

	export default{
		computed:{
			...mapGetters(['get_zong','get_arr'])
		},

	}
</script>

<style>
</style>
