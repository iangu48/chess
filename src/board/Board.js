import React, {useState} from 'react';
import {PLAYER_COLOUR, PIECES} from '../constants'
import King from "./pieces/King";
import {Box, Container, Grid} from "@material-ui/core";
import Square from "./Square";

export default function Board(props) {
    const [board, setBoard] = useState([
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ])
    const [turn, setTurn] = useState(PLAYER_COLOUR.WHITE)
    const [selected, setSelected] = useState(null)


    return (
        <Container>
            <Grid container direction={"column"} justify={"center"}>
                {board.map((row, r) =>
                    <Grid container item direction={"row"} justify={"center"}>
                        {row.map((piece, c) =>
                            <Grid item>
                                <Square piece={piece} pos={[r,c]} onSelect={setSelected}/>
                            </Grid>)}
                    </Grid>)}
            </Grid>
        </Container>
    )
}