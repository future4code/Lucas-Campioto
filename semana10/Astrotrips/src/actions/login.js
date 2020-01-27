import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from "../containers/Router/index";

export const login = (email, password) => async (dispatch) =>{
    const loginInformation = {
        email,
        password,
    }

    try {
        const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureX/lucas/login", loginInformation);
        window.localStorage.setItem("token", response.data.token);

        dispatch(push(routes.tripList))
        
    } catch(error) {
        window.alert("Login Invalido")
    }
}