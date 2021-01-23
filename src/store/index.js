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
        ...UserInfo.mutations,
        changeState(state, {
            name,
            value
        }) {
            state[name] = value
        },
        VaildToken(){
            console.log("验证");
        }
    },
    actions: {
        ...UserInfo.actions,
        changeState(context, {
            name,
            value
        }) {
            context.commit('changeState', {
                name,
                value
            })
        },
        VaildToken(){
            console.log("Vuex验证...");

        }
    }
});
export default store