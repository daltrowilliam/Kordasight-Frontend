import axios from "axios"
import {BASE_URL} from "../constants/apiConstants"
import { goToImageFeed } from "../routes/coordinator"

export const addImage = (body, history) => {
    
    axios.post(`${BASE_URL}/image/registry`, body).then(response => {
        alert("Imagem cadastrada!")
        goToImageFeed(history)
    }).catch(error => {
        alert("Erro ao criar imagem!")
    })
}
