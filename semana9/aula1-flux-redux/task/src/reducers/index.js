import {combineReducers} from "redux";
import tarefas from "./tarefas";

const rootReducer = combineReducers({
    tarefas: tarefas
})

export default rootReducer;