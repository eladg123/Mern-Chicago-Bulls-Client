import React, { useState } from 'react'
import axios from 'axios'


function PlayerCard(props) {
    const [player, setPlayer] = useState(props.player);




    return (<div style={{ backgroundColor: "lightblue", border: "2px solid black" }}>
        Name:&nbsp;{player.name} <br></br>
        Position:&nbsp; {player.position} <br></br>
        Number:&nbsp; {player.number} <br></br>
        Age:&nbsp; {player.age} <br></br>
        <img src={player.image} style={{ width: "500px", height: "300px" }} />


    </div>)
}

export default PlayerCard;