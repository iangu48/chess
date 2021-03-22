import React, {useState} from "react";

export default function Rook(props) {
    const {pieceColour} = props

    const [colour, setColour] = useState(pieceColour)

    return (<div>R</div>)
}

export function moveKing(board, colour, ) {

}