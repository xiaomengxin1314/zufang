import Vue from 'vue'
import Vuex from 'vuex'
import vuexLocalList from 'vuex-persist'
const vuexLocal = new vuexLocalList({
  storage: window.localStorage
})
Vue.use(Vuex)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    city: {
      label: '北京',
      value: 'AREA|88cff55c-aaa4-e2e0'
    },
    cityId: 'AREA|88cff55c-aaa4-e2e0'
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setCity (state, payload) {
      state.city = payload
    },
    setCityId (state, payload) {
      state.cityId = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
