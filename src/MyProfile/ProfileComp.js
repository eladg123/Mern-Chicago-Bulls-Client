import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ProfileComp(props) {
    let profileJSON = sessionStorage.getItem("profile");
    let profile = JSON.parse(profileJSON);
    let ticketsToRender;
    const [age, setAge] = useState(profile.age);
    const [job, setJob] = useState(profile.job);
    const [email, setEmail] = useState(profile.email);
    const [city, setCity] = useState(profile.city);
    const [address, setAddress] = useState(profile.address);
    const [currentUser, setCurrentUser] = useState();
    useEffect(async () => {
        let resp = await axios.get(`https://eccomerce-mern-chicago-bulls.herokuapp.com/api/profiles/${profile._id}`);
        setCurrentUser(resp.data)
    }, [])
    if (currentUser && currentUser.tickets.length > 0) {
        ticketsToRender = currentUser.tickets.map((ticket, i) => {
            return (<li style={{ color: "white" }} key={i}>Against {ticket.against} on {ticket.date.slice(0, 10)}.</li>)
        })
    }
    const backPage = () => {
        props.history.push("/main")
    }
    const updateMyProfile = async () => {
        let updatedProfile = {
            _id: profile._id,
            tickets: profile.tickets,
            gender: profile.gender,
            city: city,
            fName: profile.fName,
            lName: profile.lName,
            job: job,
            birthDate: profile.birthDate,
            address: address,
            email: email,
            age: age,
            username: profile.username,
            password: profile.password
        }
        await axios.put(`https://eccomerce-mern-chicago-bulls.herokuapp.com/api/profiles/${profile._id}`,updatedProfile );
        sessionStorage.removeItem("profile");
        let profileJSON = JSON.stringify(updatedProfile);
        sessionStorage.setItem("profile", profileJSON)
        alert("Your changes are succeeded")
        props.history.push("/main")
    }
    const deleteProfile = async () => {
        await axios.delete(`https://eccomerce-mern-chicago-bulls.herokuapp.com/api/profiles/${profile._id}`)
        alert("Your account has been deleted! 👊🏻")
        props.history.push("/")
    }

    return (<div style={{ textAlign: "left" }}>
        &nbsp;  <span style={{ color: "white" }}>Name: {profile.fName} {profile.lName}</span> <br></br>
        &nbsp; <span style={{ color: "white" }}>Age:</span> <input defaultValue={profile.age} onChange={e => setAge(e.target.value)} /> <br></br>
        &nbsp; <span style={{ color: "white" }}>Job:</span> <input defaultValue={profile.job} onChange={e => setJob(e.target.value)} /> <br></br>
        &nbsp; <span style={{ color: "white" }}>Email:</span> <input defaultValue={profile.email} onChange={e => setEmail(e.target.value)} /> <br></br>
        &nbsp; <span style={{ color: "white" }}>BirthDate: {profile.birthDate.slice(0, 10)} </span> <br></br>
        &nbsp; <span style={{ color: "white" }}>City:</span> <input defaultValue={profile.city} onChange={e => setCity(e.target.value)} /> <br></br>
        &nbsp; <span style={{ color: "white" }}>Address:</span> <input defaultValue={profile.address} onChange={e => setAddress(e.target.value)} /> <br></br>
        &nbsp; <span style={{ color: "white" }}>My tickets:</span> <ol >{ticketsToRender}</ol> <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <input class="btn btn-secondary btn-lg" type="button" value="Back" onClick={backPage} />&nbsp;
        <input class="btn btn-primary btn-lg" type="button" value="Update" onClick={updateMyProfile} /> &nbsp;
        <input class="btn btn-secondary btn-lg" type="button" value="Delete my account" onClick={deleteProfile} />



    </div>)
}

export default ProfileComp;
