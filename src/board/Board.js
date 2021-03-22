import React, {useState} from 'react';
import {PIECES} from '../constants'
import {Container, Grid} from "@material-ui/core";
import Square from "./Square";

export default function Board(props) {
    const [board, setBoard] = useState([
        [PIECES.BLACK.ROOK, PIECES.BLACK.KNIGHT, PIECES.BLACK.BISHOP, PIECES.BLACK.QUEEN, PIECES.BLACK.KING, PIECES.BLACK.BISHOP, PIECES.BLACK.KNIGHT, PIECES.BLACK.ROOK],
        [PIECES.BLACK.PAWN, PIECES.BLACK.PAWN, PIECES.BLACK.PAWN, PIECES.BLACK.PAWN, PIECES.BLACK.PAWN, PIECES.BLACK.PAWN, PIECES.BLACK.PAWN, PIECES.BLACK.PAWN],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [PIECES.WHITE.PAWN, PIECES.WHITE.PAWN, PIECES.WHITE.PAWN, PIECES.WHITE.PAWN, PIECES.WHITE.PAWN, PIECES.WHITE.PAWN, PIECES.WHITE.PAWN, PIECES.WHITE.PAWN],
        [PIECES.WHITE.ROOK, PIECES.WHITE.KNIGHT, PIECES.WHITE.BISHOP, PIECES.WHITE.QUEEN, PIECES.WHITE.KING, PIECES.WHITE.BISHOP, PIECES.WHITE.KNIGHT, PIECES.WHITE.ROOK],
    ])
    const [turn, setTurn] = useState(PIECES.WHITE)
    const [selected, setSelected] = useState([-1, -1])

    function toggleSelect(s) {
        if (JSON.stringify(selected) === JSON.stringify([-1,-1]))   //
            setSelected(s)
        else if (JSON.stringify(s) !== JSON.stringify(selected))    // move piece on top of my own piece
            setSelected(s)
        else
            setSelected([-1, -1])
    }

    return (
        <Container>
            {turn === PIECES.WHITE ? 'white turn' : 'black turn'}
            <Grid container direction={"column"} style={{minHeight: '100vh'}} justify={"center"}>
                {board.map((row, r) =>
                    <Grid container item direction={"row"} justify={"center"}>
                        {row.map((piece, c) => {
                            return <Grid item key={[r, c]}>
                                <Square piece={piece} pos={[r, c]} setSelected={toggleSelect} selected={selected}
                                        turn={turn} setTurn={setTurn} board={board} setBoard={setBoard}/>
                            </Grid>
                        })}

                    </Grid>)}
            </Grid>
        </Container>
    )
}