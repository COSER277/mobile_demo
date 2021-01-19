import Vue from 'vue';
import Vuex from 'vuex';
const getters =require('./getters')
import UserInfo from './modules/userInfo';
Vue.use(Vuex);

 const store = new Vuex.Store({
    state: {
        ...UserInfo.state
    },
    getters: getters,
    modules: {
        userInfo: UserInfo,
    },
    mutations: {
        ...UserInfo,
        changeState(state, {
            name,
            value
        }) {
            state[name] = value
        }
    },
    actions: {
        ...UserInfo,
        changeState(context, {
            name,
            value
        }) {
            context.commit('changeState', {
                name,
                value
            })
        }
    }
});
export default store