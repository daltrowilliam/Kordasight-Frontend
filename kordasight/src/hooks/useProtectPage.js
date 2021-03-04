import { useEffect, useContext } from "react"
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../routes/coordinator';
import GlobalStateContext from "../globalContext/GlobalStateContext";


export const useProtectPage = () => {
    const history = useHistory()

    const global = useContext(GlobalStateContext);
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        const username = window.localStorage.getItem("username")

        if (token) {
            global.setLabelLog("Olá " + username + "! / Logout")
        } else {
            goToLogin(history)
        }

        if (!token) {
           goToLogin(history)

        }
    }, [history])

}