
const app = {
    state: {
        addComment: false,
        addMessage: false
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
        Add_Comment(state, data) {
            state.addComment = data
        },
        Add_Message(state, data) {
            state.addMessage = data
        },
    }
}
export default app