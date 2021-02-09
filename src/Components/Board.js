import React from 'react'

function Board() {
    let allButtonArray = []
    for (let i = 0; i < tileDataArray.length; i++) {
        let num = tileDataArray[i]
        if (i === 0) {
            let allButton = <Button id="emptyButton" outline color="primary" onClick={updateTheBoard} style={{ height: 150, width: 250 }} key={i}>{num.currentValue}</Button>
            allButtonArray.push(allButton)
        }
    }
    return (
        <div>

        </div>
    )
}

export default Board
