const initialState = {
    listaTarefa:[],
};



const tarefas = (state = initialState, action) => {
    switch(action.type){
        case "CRIAR_TAREFA":
            return { ...state, listaTarefa: [...state.listaTarefa, action.payload.novaTarefa] }
        // case "DELETAR_TAREFA":
        //     return {...state, tarefaInicial: action.payload.novaTarefa}
        // case "TAREFA_COMPLETA":
        //     return {...state, tarefaInicial: action.payload.novaTarefa}
        // case "TAREFA_PENDENTE":
        //     return {...state, tarefaInicial: action.payload.novaTarefa}
        // case "TAREFA_COMPLETA":
        //     return {...state, tarefaInicial: action.payload.novaTarefa}
        // case "TODAS_TAREFAS":
        //     return {...state, tarefaInicial: action.payload.novaTarefa}
        // case "MARCAR_TODAS_TAREFA":
        //     return {...state, tarefaInicial: action.payload.novaTarefa}
        default:
            return state
    }
}

export default tarefas;