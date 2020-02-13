import axios from 'axios';

export const setAllTask = (allTasks) => ({
    type: "SET_TASK",
    payload: {
        allTasks,
    }
})

export const getAllTasks = () => async (dispatch) => {

    try{
        const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-lucas")
        dispatch(setAllTask(response.data))
    }catch{
        window.alert("erro")
    }
}

export const createTask = (text, day) => async (dispatch) => {
    const TaskData = {
        text,
        day,
    }
    
    try {
        await axios.post("https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-lucas", TaskData);
        dispatch(getAllTasks());
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar criar uma nova tarefa.");
    }
}