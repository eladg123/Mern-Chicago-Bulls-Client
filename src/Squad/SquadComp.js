import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard';

function SquadComp(props) {
    const [squad, setSquad] = useState();
    useEffect(async () => {
        let resp = await axios.get("https://eccomerce-mern-chicago-bulls.herokuapp.com/api/players");
        setSquad(resp.data);
    }, [])
    let playersToRender;
    if (squad) {
        playersToRender = squad.map(player => {
            return (<PlayerCard key={player._id} player={player} />)
        })
    }

    return (<div>

        {playersToRender}
    </div>)
}

export default SquadComp;