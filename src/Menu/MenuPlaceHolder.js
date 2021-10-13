import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProfileComp from '../MyProfile/ProfileComp';
import SquadComp from '../Squad/SquadComp';
import TicketsComp from '../Tickets/TicketsComp';
function MenuPlaceHolder(props) {



    return (<div><br></br>
        <h2 style={{ color: "black" }}>Choose your select 👆</h2>
        <Switch>
            <Route path="/main/myProfile" component={ProfileComp} />
            <Route path="/main/Squad" component={SquadComp} />
            <Route path="/main/Tickets" component={TicketsComp} />
        </Switch>



    </div>)
}

export default MenuPlaceHolder;