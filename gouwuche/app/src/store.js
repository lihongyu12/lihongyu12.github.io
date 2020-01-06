import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
	arr: [],
	zong: 0
}

var getters = {
	get_arr(state) {
		return state.arr
	},
	get_zong(state) {
		var sum = 0
		if (state.arr.length) {
			for (var i = 0; i < state.arr.length; i++) {
				sum += state.arr[i]['num'] * state.arr[i]['money']
			}
		}
		state.zong = sum
		return state.zong
	}
}

var mutations = {
	set_arr(state,a) {
		state.arr=a
	},
	pop_data(state,a){
		for (var i = 0; i < state.arr.length; i++) {
			if (state.arr[i].num<=0) {
					state.arr.splice(i,1)
			}
		}
	}
}

var actions = {
	set_arrs({
		commit
	},a){
		commit('set_arr',a)
	},
	pushs({
		commit
	}, a) {
		commit('push_arr', a)
	},
	pops({
		commit
	}, a) {
		commit('pop_data', a)
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
