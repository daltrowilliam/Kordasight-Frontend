import styled from "styled-components"
import {Card, CardActions, CardMedia} from '@material-ui/core';


export const CardStyled = styled(Card)`
    width: 50vw;
    min-width: 300px;
    margin: 10px;
    cursor: pointer;
`

export const CardMediaStyled = styled(CardMedia)`
    height: 240px;
`
export const CardActionsStyled = styled(CardActions)`
    display: flex;
    justify-content: space-between;

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

export const VoteIcon = styled.img`
    height: 4vh;
    cursor: pointer;
`