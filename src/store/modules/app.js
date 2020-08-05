
const app = {
    state: {
        visitors: 0, // 游客人数
        showLive2D: true,
        showMusicBox: true,
        currEntry: false
    },
    actions: {
        // getVisitors ({commit}) {
        //     return new Promise(async resolve => {
        //         const res = await Visitor.getVisitors()
        //         commit('SET_VISITORS', {num: res.data.num})
        //         resolve()
        //     })
        // }
    },
    mutations: {
        SET_VISITORS(state, payload) {
            state.visitors = payload.num
        },
        SET_LIVE2D_STATUS(state, payload) {
            state.showLive2D = payload.show
        },
        SET_MUSICBOX_STATUS(state, payload) {
            state.showMusicBox = payload.show
        },
        SET_CURR_ENTRY(state, data) {
            state.currEntry = data
        }
    }
}
export default app