import ActionType from "./globalActionType";

const globalState = {
    totalOrder: 0
}

// Reducer
const rootReducer = (state = globalState , action) => {
    switch (action.type) {
        case ActionType.PLUS_ORDER:
            return{
                ...state,
                totalOrder: state.totalOrder + 1
            }
            break;
        case ActionType.MUNUS_ORDER:
            let total_order = 0;
            if(state.totalOrder > 0){
                total_order = state.totalOrder - 1
            }
            return{
                ...state,
                totalOrder: total_order
            }
            break;
        default:
            return state
            break;
    }
}

export default rootReducer;