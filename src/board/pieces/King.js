import React, {useState} from "react";

export default function King(props) {
    const {pieceColour} = props

    const [colour, setColour] = useState(pieceColour)

    return (<div>king</div>)
}

export function moveKing(board, colour, ) {

}