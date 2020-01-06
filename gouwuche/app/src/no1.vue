<template>
	<div style="height: 28.222222rem;position: relative;overflow: hidden;">
		<div>
			点餐
		</div>
		<div class="clearfix">
			<div class="aside">
				<div @click="das=arr1">水饺</div>
				<div @click="das=arr2">流食</div>
				<div @click="das=arr3">凉菜</div>
				<div @click="das=arr4">包子</div>
			</div>
			<div class="aside-left">
				<show v-for="i in das">
					<img slot="img" :src="i.img" alt="" style="width: 100%;height: 100%;border-radius: 0.074074rem;">
					<h5 slot="title" style="font-size: 0.622222rem;">{{i.title}}</h5>
					<p slot="money">￥<span>{{i.money}}</span> <span><i class="el-icon-remove" v-if="i.num>0" @click="i.num--,pops()" ></i><span v-if="i.num>0">{{i.num}}</span><i class="el-icon-circle-plus" @click="i.num++,push1(i)"></i></span></p>
				</show>
			</div>
		</div>
		<div style="position: absolute;bottom: 0px;left: 0px;background: #0D3349;width: 100%;height: 2.029629rem;line-height: 2.029629rem;font-size: 0.592592rem;color: #fff;">
			<span>￥<span>{{get_zong}}</span></span><a style="float: right;color: #fff;width: 25%;line-height:2.029629rem ;background: #006600; text-align: center;"
			 href="#/no2">去结算</a>
		</div>
	</div>
</template>

<script>
	import show from './show.vue'
	import num from './num.vue'
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		computed:{
			...mapGetters(['get_zong'])
		},
		methods:{
			...mapActions(['pops','set_arrs']),
			push1(a) {
				if (this.datas.length>0) {
					for (var i = 0; i < this.datas.length; i++) {
						if(this.datas[i].uid!=a.uid){
							this.datas.push(a)
						}
					}
				}else{
					this.datas.push(a)
					this.set_arrs(this.datas)
				}
			
			}
		},
		components: {
			show
		},
		created(){
			this.das=this.arr1
		},
		data() {
			return {
				json: '',
				das:'',
				datas:[],
				arr1: [{
						num: 0,
						uid:1001,
						title: "水饺1",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1002,
						title: "水饺2",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1003,
						title: "水饺3",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1004,
						title: "水饺4",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1005,
						title: "水饺5",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1006,
						title: "水饺6",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1007,
						title: "水饺7",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					}
				],
				arr2: [{
						num: 0,
						uid:1008,
						title: "流食1",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1009,
						title: "流食2",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1010,
						title: "流食3",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1011,
						title: "流食4",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1012,
						title: "流食5",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1013,
						title: "流食6",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1014,
						title: "流食7",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					}
				],
				arr3: [{
						num: 0,
						uid:1015,
						title: "凉菜1",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1016,
						title: "凉菜2",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1017,
						title: "凉菜3",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1018,
						title: "凉菜4",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1019,
						title: "凉菜5",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1020,
						title: "凉菜6",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1021,
						title: "凉菜7",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					}
				],
				arr4: [{
						num: 0,
						uid:1022,
						title: "包子1",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1023,
						title: "包子2",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1024,
						title: "包子3",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1025,
						title: "包子4",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1026,
						title: "包子5",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1027,
						title: "包子6",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					},
					{
						num: 0,
						uid:1028,
						title: "包子7",
						money: "16",
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578290926&di=fdd53e49b73d787a8e4d0d18ef89d973&src=http://bpic.588ku.com/element_origin_min_pic/16/11/17/1a12cf9e989b9d05ca6cc11de4ddd221.jpg"
					}
				]
			}

		}
	}
</script>

<style>
	.aside {
		float: left;
		font-size: 0.444444rem;
		line-height: 3em;
		width: 20%;
		text-indent: 1em;
		margin-right: 0.444444rem;
	}

	.aside>div {
		background: #f8f8f8;
	}

	.aside-left {
		width: 77%;
		float: left;
		height: 26.222222rem;
		overflow-y: scroll;
	}
</style>
