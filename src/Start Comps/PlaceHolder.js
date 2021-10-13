import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginComp from './LoginComp';
import { UsersContextProvider } from '../Contexts/UsersContext'
import CreateAccount from './CreateAccount';
import EnjoyComp from './EnjoyComp';
import MainPage from './MainPage';

function PlaceHolder(props) {



    return (<div>
        <span style={{ height: "55px", width: "447px", fontSize: "27px" }} class="badge rounded-pill bg-primary"> Chicago Bulls Basketball Team 🏀</span>
        <UsersContextProvider>
            <Switch>
                <Route exact path="/" component={LoginComp} />
                <Route path="/CreateAccount" component={CreateAccount} />
                <Route path="/Enjoy" component={EnjoyComp} />
                <Route path="/Main" component={MainPage} />

            </Switch>
        </UsersContextProvider>

    </div>)
}


export default PlaceHolder;