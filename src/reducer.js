const initialState = {
    searchStr: 0
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH':
            return Object.assign({}, {
                searchStr: action.searchStr
            });
        default:
            return state;
    }
}