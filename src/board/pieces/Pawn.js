import React, {useState} from "react";

export default function Pawn(props) {
    const {pieceColour} = props

    const [colour, setColour] = useState(pieceColour)

    return (<div>p</div>)
}

export function moveKing(board, colour, ) {

}