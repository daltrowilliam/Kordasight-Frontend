import styled from "styled-components"
import {Card, CardContent, CardMedia} from '@material-ui/core';


export const CardStyled = styled(Card)`
    width: 50vw;
    min-width: 300px;
    margin: 10px;
    cursor: pointer;
`

export const CardMediaStyled = styled(CardMedia)`
    height: 240px;
`
export const CardContentStyled = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const CountVoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 2vw;
    min-width: 100px;
    justify-content: space-between;
    align-items: center;
`

export const PreviewImage = styled.img`
    width: 60vw;
    max-width: 300px;
    cursor: pointer;
`