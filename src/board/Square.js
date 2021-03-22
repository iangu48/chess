import {Box} from "@material-ui/core";
import {PIECES, PLAYER_COLOUR} from "../constants";
import King from "./pieces/King";
import checkMove from "./pieces/ValidateMove";
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

    function handleClick() {
        if (isAllyPiece()) { // select ally piece
            setSelected(pos)
        } else if ((isCurrentSquareEmpty() || !isAllyPiece()) && isClickPieceMove()) { // move to empty square or try to take piece
            // if move is valid (empty square, enemy square, correct movement)
            if (checkMove(selected, pos, board, null )) {
                movePiece(selected, pos)
            } else {
                console.log('cannot move here')
            }
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

    // Current square is empty
    function isCurrentSquareEmpty() {
        return board[r][c] === 0
    }
    // Current square is an ally piece
    function isAllyPiece() {
        return Object.values(turn).indexOf(piece) >= 0
    }
    // A square has already been selected, and current click is attempting to move piece to new position
    function isClickPieceMove() {
        return JSON.stringify([-1, -1]) !== JSON.stringify(selected)
    }
    // Is current piece selected
    function isSelected() {
        return JSON.stringify(pos) === JSON.stringify(selected)
    }


    return (
        <Box onClick={handleClick} border={1} style={{height: 50, width: 50, background: highlighted}}>
            {draw(piece)}
        </Box>
    )
}