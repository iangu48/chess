import {PIECES, PLAYER_COLOUR} from "../../constants";
import React from "react";

export default function checkMove(from, to, board, colour) {
    const piece = board[from[0]][from[1]]
    switch (piece) {
        case PIECES.BLACK.KING:
            return checkKing()

        case PIECES.WHITE.KING:
            return checkKing()

        case PIECES.BLACK.QUEEN:
            return checkKing()

        case PIECES.WHITE.QUEEN:
            return checkKing()

        case PIECES.BLACK.ROOK:
            return checkKing()

        case PIECES.WHITE.ROOK:
            return checkKing()

        case PIECES.BLACK.BISHOP:
            return checkKing()

        case PIECES.WHITE.BISHOP:
            return checkKing()

        case PIECES.BLACK.KNIGHT:
            return checkKing()

        case PIECES.WHITE.KNIGHT:
            return checkKing()

        case PIECES.BLACK.PAWN:
            return checkKing()

        case PIECES.WHITE.PAWN:
            return checkKing()

        default:
            return checkKing()
    }
}

function checkKing() {

}
