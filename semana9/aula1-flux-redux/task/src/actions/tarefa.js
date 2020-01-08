export const adicionarTarefa = novaTarefa => {
    return {
        type:"CRIAR_TAREFA",
        payload:{
            novaTarefa: novaTarefa
        }
    }
}