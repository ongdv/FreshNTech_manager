import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations';
import state from './state';
// import {CommonStore} from './Moudles/Common/CommonStore';
// import {EmployeeStore} from './Moudles/Employee/EmployeeStore';

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    mutations,
    state,  
    // modules: {
    //     CommonStore,
    //     EmployeeStore
    // }
})
