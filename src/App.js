import React, { useState } from 'react';
import { Container, Button, Col, Row } from "reactstrap"

function App() {

  const [allTileData, setAllTileData] = useState([]);

  const clickFunction = () =>
    setAllTileData([...tileDataArray, {
      id: allTileData.id,
      value: allTileData.currentValue,
      possibleMoves: allTileData.possibleMoves
    }])

  let tileDataArray = []
  for (let i = 0; i < 16; i++) {
    let tileData = { "id": (i), "currentValue": (i), "possibleMoves": [(i + 1), (i - 1), (i + 4), (i - 4)], "winValues": (i) }
    tileDataArray.push(tileData)
    console.log(tileDataArray)
  }
  
  // const clickFunction = () => {
    // console.log()
    // for (let i = 0; i < 15; i++) {
      // console.log(allTileData)
      // var currentVale = allTileData.currentValue
      // if (zeroTile === 0)
      // console.log(allTileData)
      // for (let j = 0; j < allTileData.length; j++) {
      //   var possibleMoveID = allTileData.possibleMoves[j];
      //   var currentMoveToCheck = allTileData[i].id
        //   if ( === currentMoveToCheck) {
        //     console.log('can switch')
        //     let copy = allTileData
        //     let temp = 0
        //     temp = copy[tileID].currentValue
        //     copy[tileID].currentValue = copy[i].currentValue
        //     copy[i].currentValue = temp
        //     // console.log(copy)
        //     setAllTileData([...tileDataArray, {
        //       id: allTileData.id,
        //       value: allTileData.currentValue
        //     }])
        //   } else if(possibleMoveID !== currentMoveToCheck) {
        //     console.log('can not switch')
        //   }
        // }
    // }
  // }

  let allButtonArray = []
  for (let i = 0; i < tileDataArray.length; i++) {
    let num = tileDataArray[i]
    let allButton = <Button id={i} outline color="primary"
      // onClick={updateTheBoard}
      onClick={()=>clickFunction(i)}
      style={{ height: 150, width: 250 }} key={allTileData.id}>{num.currentValue}</Button>
    allButtonArray.push(allButton)
  }

  return (
    <Container>
      <Row>
        <Col>
          {allButtonArray}
        </Col>
      </Row>
    </Container>
  )
}

export default App
