import styled from "styled-components"
import {TextField, Button} from '@material-ui/core';


export const ImageFeedPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 85vw;
    max-width: 375px;
    padding-top: 15px;
    margin: 0 auto;
`

export const TextFieldStyled = styled(TextField)`
    width: 50vw;
    min-width: 300px;
`

export const ButtonStyled = styled(Button)`
    width: 50vw;
    min-width: 300px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 32vh;
    justify-content: space-around;
    margin-bottom: 15px;
`

export const Logomarca = styled.img`
    max-height: 18vh;
    margin: 0 auto;
    
`

export const LogoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50vw;
    min-width: 350px;
    justify-content: center;
    margin-top: 15px;
`
