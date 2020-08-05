import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import navigation from './modules/navigation'
import getters from './getters'
Vue.use(Vuex)
export const createStore = () => {
    const store = new Vuex.Store({
    	modules: {
            app,
            navigation
            // blog,
            // music,
            // audio
        },
        getters
    }) 
    
    if (typeof window !== "undefined") {
        // import('./modules/navigation').then(res => store.registerModule('navigation', res.default)) 
        import('./modules/system').then(res => store.registerModule('system', res.default)) 
        // import('./modules/user').then(res => store.registerModule('user', res.default)) 
    }
    return store
}