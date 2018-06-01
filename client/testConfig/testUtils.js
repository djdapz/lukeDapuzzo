const mockStore = function(state = {}) {
    return {
        getState: function () {
            return state
        },
        dispatch: function () {
            return {}
        },
        subscribe: function () {

        }
    }
};


export {
    mockStore
}