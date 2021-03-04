import axios from "axios"
import {BASE_URL} from "../constants/apiConstants"
import { goToImageFeed } from "../routes/coordinator"

export const login = (body, history) => {
    
    axios.post(`${BASE_URL}/user/login`, body).then(response => {
        console.log(`${BASE_URL}"/user/login"`)
        console.log(body)
        console.log(response)
        localStorage.setItem("token", response.data.result.accessToken)
        localStorage.setItem("username", response.data.result.username)
        goToImageFeed(history)
    }).catch(error => {
        console.log(error.response)
        alert("Email ou senha inválidos!")
        
    })
}

export const signup = (body, history) => {
    
    axios.post(`${BASE_URL}/user/signup`, body).then(response => {
        localStorage.setItem("token", response.data.result.accessToken)
        localStorage.setItem("username", response.data.result.username)
        goToImageFeed(history)
    }).catch(error => {
        alert("Erro ao cadastar usuário!")
        
    })
}