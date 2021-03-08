import styled from "styled-components"
import { Card, CardContent } from '@material-ui/core';


export const ImageDetailPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    max-width: 375px;
    margin: 0 auto;
    padding-top: 15px;
`
export const LogoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50vw;
    min-width: 350px;
    justify-content: center;
    margin-top: 15px;
`

export const Logomarca = styled.img`
    max-height: 18vh;
    max-width: 375px;
    margin: 0 auto;
`

export const CardStyled = styled(Card)`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr;
    width: 100vw;
    max-width: 375px;
    margin: 0px;    
`

export const CardContentStyled = styled(CardContent)`
    display: flex;
    flex-wrap: wrap;
    grid-row-start: 1;
    grid-column-start: 1;
    width: 70vw;
    max-width: 280px;
    padding-top: 15px;
    margin: 0 auto;    
`

export const Imagem = styled.img`
    width: 85vw;
    max-width: 370px;
    margin: 0 auto;
`

export const AddButtonContainer = styled.div`
    display: flex;
    grid-row-start: 1;
    grid-column-start: 2;
`

