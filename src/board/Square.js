import {Box} from "@material-ui/core";
import {PIECES, PLAYER_COLOUR} from "../constants";
import King from "./pieces/King";
import React, {useEffect, useState} from "react";
import Queen from "./pieces/Queen";
import Pawn from "./pieces/Pawn";
import Knight from "./pieces/Knight";
import Bishop from "./pieces/Bishop";
import Rook from "./pieces/Rook";


export default function Square(props) {
    const {piece, pos, setSelected, selected, turn, board, setBoard, setTurn} = props
    const [r, c] = pos
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
                return <div></div>
        }
    }

    function handleClick() {

        if (Object.values(turn).indexOf(piece) >= 0) {
            setSelected(pos)
        } else if (board[r][c] === 0 && JSON.stringify([-1, -1]) !== JSON.stringify(selected)) {
            // if move is valid, then move
            movePiece(selected, pos)

            // else cannot move here
        } else {
            console.log('cannot move this pce')
        }
    }

    function movePiece(from, to) {
        const copy = [...board]
        copy[to[0]][to[1]] = copy[from[0]][from[1]]
        copy[from[0]][from[1]] = 0

        setBoard(copy)

        // end turn
        setTurn(turn === PIECES.WHITE ? PIECES.BLACK : PIECES.WHITE)

        // unselect square
        setSelected([-1,-1])
    }

    return (
        <Box onClick={handleClick} border={1} style={{height: 50, width: 50, background: highlighted}}>
            {draw(piece)}
        </Box>
    )
}