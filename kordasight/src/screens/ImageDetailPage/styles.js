import styled from "styled-components"
import { Card } from '@material-ui/core';


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
    width: 90vw;
    max-width: 375px;
    margin: 0px;    
`

export const Imagem = styled.img`
    width: 90vw;
    max-width: 375px;
    margin: 0 auto;
`


