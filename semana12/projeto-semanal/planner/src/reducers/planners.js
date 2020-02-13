const initialState = {
    allTasks: [],
}

const plannersReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_TASK":
            const taskList = action.payload.allTasks;
            return { ...state, allTasks: taskList }

        default:
            return state;
    }
}

export default plannersReducer