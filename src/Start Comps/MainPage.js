import React, { useEffect, useState } from 'react'
import MenuPlaceHolder from '../Menu/MenuPlaceHolder';


function MainPage(props) {

    let profileJSON = sessionStorage.getItem("profile");
    let profile = JSON.parse(profileJSON);
    const toMyProfile = () => {
        props.history.push("/main/myProfile");
    }

    const toSquad = () => {
        props.history.push('/main/Squad');
    }
    const toTickets = () => {
        props.history.push('/main/Tickets')
    }
    return (<div>
        <span style={{ alignItems: "left", fontSize: "30px" }} class="badge rounded-pill bg-danger">Menu </span> <br></br> <br></br>
        <h3 style={{ color: "black" }}>Hey {profile.fName} {profile.lName} 🤙</h3> <br></br>
        <button onClick={toMyProfile} style={{ height: "40px", width: "100px", fontSize: "15px" }} type="button" class="btn btn-light">My Profile</button>'&nbsp;'
        <button onClick={toSquad} style={{ height: "40px", width: "100px", fontSize: "20px" }} type="button" class="btn btn-success">Squad</button>'&nbsp;'
        <button onClick={toTickets} style={{ height: "40px", width: "100px", fontSize: "20px", color: "white" }} type="button" class="btn btn-info">Tickets</button>'&nbsp;'
        <button style={{ height: "40px", width: "100px", fontSize: "20px" }} type="button" class="btn btn-dark">Shop</button>'&nbsp;'
        <button style={{ height: "40px", width: "100px", fontSize: "20px" }} type="button" class="btn btn-danger">Log Out</button>'&nbsp;'
        <MenuPlaceHolder />
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>


    </div>)
}

export default MainPage;