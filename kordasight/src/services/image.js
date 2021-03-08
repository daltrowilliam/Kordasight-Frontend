import axios from "axios"
import {BASE_URL} from "../constants/apiConstants"
import { goToImageFeed } from "../routes/coordinator"

export const addImage = (body, history) => {
    // Para passar o token de autorização no headers da requisição
    const token = localStorage.getItem("token")
    const headers = {authorization: token}

    axios.post(`${BASE_URL}/image/registry`, body, {headers}).then(response => {
        alert("Imagem cadastrada!")
        goToImageFeed(history)
    }).catch(error => {
        alert(error.response.data.error)
    })
}

export const deleteImage = (id, history) => {
    // Para passar o token de autorização no headers da requisição
    const token = localStorage.getItem("token")
    const headers = {authorization: token}

    if (window.confirm("Tem certeza que deseja excluir essa foto?")) {
        axios.delete(`${BASE_URL}/image/delete/${id}`, {headers}).then(response => {
            alert("Imagem excluída!")
            console.log(response)
            goToImageFeed(history)
        }).catch(error => {
            alert(error.response.data.error)
        })
    }
}
