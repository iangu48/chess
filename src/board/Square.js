import {Box} from "@material-ui/core";
import {PIECES, PLAYER_COLOUR} from "../constants";
import King from "./pieces/King";
import React, {useEffect, useState} from "react";

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