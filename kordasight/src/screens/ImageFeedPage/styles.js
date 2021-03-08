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

export const FeedContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr;
    width: 100vw;
    max-width: 375px;
    padding-top: 15px;
    margin: 0 auto;
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-row-start: 1;
    grid-column-start: 1;
    width: 90vw;
    max-width: 300px;
    padding-top: 15px;
    margin: 0 auto;
`

export const AddButtonContainer = styled.div`
    display: flex;
    width: 10vw;
    max-width: 75px;
    grid-row-start: 1;
    grid-column-start: 2;
    align-items: start;
`


export const TextFieldStyled = styled(TextField)`
    width: 50vw;
    min-width: 300px;
`

export const ButtonStyled = styled(Button)`
    width: 50vw;
    min-width: 300px;
`

export const Logomarca = styled.img`
    width: 80vw;
    max-width: 340px;
    margin: 0 auto;
    
`

export const AddButton = styled.img`
    max-height: 5vh;
    margin: 0 auto;
    padding-top: 15px;
    margin: 0 auto;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    min-width: 350px;
    justify-content: center;
    margin-top: 15px;
`
