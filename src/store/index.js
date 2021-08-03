import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        name: 'test',
        number: '1',
      },
      {
        id: 2,
        name: 'test2',
        number: '2',
        chiefId: 1
      },
      {
        id: 3,
        name: 'test3',
        number: '3',
        chiefId: 2
      },
      {
        id: 4,
        name: 'test4',
        number: '4',
        chiefId: 3
      },
      {
        id: 5,
        name: 'test5',
        number: '5',
        chiefId: 3
      },
    ]
  },
  mutations: {
    saveUser(state, user) {
      state.users.push(user)
    },
  },
  plugins: [vuexLocal.plugin],
})

export default store
