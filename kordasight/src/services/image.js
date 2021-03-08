import axios from "axios"
import {BASE_URL} from "../constants/apiConstants"
import { goToImageFeed } from "../routes/coordinator"

export const addImage = (body, history) => {
    const token = localStorage.getItem("token")
    const headers = {authorization: token}
    axios.post(`${BASE_URL}/image/registry`, body, {headers}).then(response => {
        console.log("Body que vem do form:", body)
        alert("Imagem cadastrada!")
        goToImageFeed(history)
    }).catch(error => {
        console.log(error.response.data.error)
        alert("Erro ao criar imagem!")
    })
}
