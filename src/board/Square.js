import {Box} from "@material-ui/core";
import {PIECES, PLAYER_COLOUR} from "../constants";
import King from "./pieces/King";
import React from "react";

export default function Square(props) {
    const {piece, pos, onSelect} = props

    function draw(p) {
        switch (p) {
            case PIECES.BLACK.KING:
                return King(PLAYER_COLOUR.BLACK)

            case PIECES.WHITE.KING:
                return King(PLAYER_COLOUR.WHITE)

            default:
                return <div></div>
        }
    }

    function handleClick() {
        onSelect(pos)
        console.log(pos)
    }


    return (
        <Box onClick={handleClick} border={1} style={{height: 50, width: 50}}>
            {draw(piece)}
        </Box>
    )
}