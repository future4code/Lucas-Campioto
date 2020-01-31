import { setAllTask } from '../actions/planners'
import planners from './planners'

describe("Testando planners reducer", () => {
    test("testando o SET_TASK", () => {
        // preparação
        const currentState = {
            allTasks: [],
        }

        const action = setAllTask('post teste')

        //execução
        const newState = planners(currentState,action)

        //verificação
        expect(newState.allTasks).toHaveLength(10)
        expect(newState.allTasks).toEqual('post teste')
    })
})