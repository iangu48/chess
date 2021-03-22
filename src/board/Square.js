import {Box} from "@material-ui/core";
import {PIECES, PLAYER_COLOUR} from "../constants";
import King from "./pieces/King";
import React, {useEffect, useState} from "react";
import Queen from "./pieces/Queen";
import Pawn from "./pieces/Pawn";
import Knight from "./pieces/Knight";
import Bishop from "./pieces/Bishop";
import Rook from "./pieces/Rook";
import React from "react";


export default function Square(props) {
    const {piece, pos, setSelected, selected, turn} = props
    const highlighted = isSelected() ? '#a6f2f7' : 'white'

    function isSelected() {
        return JSON.stringify(pos) === JSON.stringify(selected)
    }

    function draw(p) {
        switch (p) {
            case PIECES.BLACK.KING:
                return King(PLAYER_COLOUR.BLACK)

            case PIECES.WHITE.KING:
                return King(PLAYER_COLOUR.WHITE)

            case PIECES.BLACK.QUEEN:
                return Queen(PLAYER_COLOUR.BLACK)

            case PIECES.WHITE.QUEEN:
                return Queen(PLAYER_COLOUR.WHITE)

            case PIECES.BLACK.ROOK:
                return Rook(PLAYER_COLOUR.BLACK)

            case PIECES.WHITE.ROOK:
                return Rook(PLAYER_COLOUR.WHITE)

            case PIECES.BLACK.BISHOP:
                return Bishop(PLAYER_COLOUR.BLACK)

            case PIECES.WHITE.BISHOP:
                return Bishop(PLAYER_COLOUR.WHITE)

            case PIECES.BLACK.KNIGHT:
                return Knight(PLAYER_COLOUR.BLACK)

            case PIECES.WHITE.KNIGHT:
                return Knight(PLAYER_COLOUR.WHITE)

            case PIECES.BLACK.PAWN:
                return Pawn(PLAYER_COLOUR.BLACK)

            case PIECES.WHITE.PAWN:
                return Pawn(PLAYER_COLOUR.WHITE)
            default:
                return <div> </div>
        }
    }

    useEffect(() => {
        if (isSelected()) {
            console.log("display possible moves")
        }
    }, [selected])

    function handleClick() {

        if (Object.values(turn).indexOf(piece) >= 0)
            setSelected(pos)
        else
            console.log('cannot move this pce')
    }


    return (
        <Box onClick={handleClick} border={1} style={{height: 50, width: 50, background: highlighted}}>
            {draw(piece)}
        </Box>
    )
}