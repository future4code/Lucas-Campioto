
export const adicionarTarefa = tarefa => {
    return {
        type:"CRIAR_TAREFA",
        payload:{
            tarefa
        }
    }
}