import React, {useState} from 'react';
import {PLAYER_COLOUR, PIECES} from '../constants'
import King from "./pieces/King";
import Queen from "./pieces/Queen";
import Pawn from "./pieces/Pawn";
//import Knight from "./pieces/Knight";
import Bishop from "./pieces/Bishop";
import Rook from "./pieces/Rook";
import {Box, Container, Grid} from "@material-ui/core";
import Square from "./Square";

export default function Board(props) {
    const [board, setBoard] = useState([
        [PIECES.BLACK.ROOK,PIECES.BLACK.KNIGHT,PIECES.BLACK.BISHOP,PIECES.BLACK.QUEEN,PIECES.BLACK.KING,PIECES.BLACK.BISHOP,PIECES.BLACK.KNIGHT,PIECES.BLACK.ROOK],
        [PIECES.BLACK.PAWN,PIECES.BLACK.PAWN,PIECES.BLACK.PAWN,PIECES.BLACK.PAWN,PIECES.BLACK.PAWN,PIECES.BLACK.PAWN,PIECES.BLACK.PAWN,PIECES.BLACK.PAWN],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [PIECES.WHITE.PAWN,PIECES.WHITE.PAWN,PIECES.WHITE.PAWN,PIECES.WHITE.PAWN,PIECES.WHITE.PAWN,PIECES.WHITE.PAWN,PIECES.WHITE.PAWN,PIECES.WHITE.PAWN],
        [PIECES.WHITE.ROOK,PIECES.WHITE.KNIGHT,PIECES.WHITE.BISHOP,PIECES.WHITE.QUEEN,PIECES.WHITE.KING,PIECES.WHITE.BISHOP,PIECES.WHITE.KNIGHT,PIECES.WHITE.ROOK],
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