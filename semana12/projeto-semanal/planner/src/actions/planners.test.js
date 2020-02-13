import { setAllTask, createTask, getAllTasks} from './planners'
import axios from "axios";


const taskMock = [{
    text: 'fazer janta',
    day: 'segunda',
}]

describe('Mostra todas as tasks', () => {
    test('envia a ação para mostrar todas as tasks', async () => {
        const dispatchMock = jest.fn()

        axios.get = jest.fn(() => {
            return {
                data: taskMock
            }
        })


        await getAllTasks()(dispatchMock)
        expect(dispatchMock).toHaveBeenCalledWith(setAllTask(taskMock))
    })
})


describe("Cria Task", () => {
    test('Ação que cria uma nova task', async () => {
        const dispatchMock = jest.fn()

        axios.post = jest.fn().mockReturnValue({
            status: 200
        })

        await createTask('fazer janta', 'segunda')(dispatchMock)

        expect(dispatchMock).toHaveBeenCalled()

        expect(axios.post).toHaveBeenCalledWith(
            "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-lucas",
            { text: 'fazer janta', day: 'segunda'}
            )
    })
})





describe("testando action de planners", ()=>{
    test("testando setAllTask action", () => {
        //preparação
        const allTasksTest = []

        //execucao
        const action = setAllTask(allTasksTest)

        //verificação 
        expect(action.type).toEqual('SET_TASK')
        expect(action.payload).toEqual({ allTasks: []})
    })
})