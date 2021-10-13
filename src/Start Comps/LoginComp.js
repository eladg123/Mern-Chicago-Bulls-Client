import React, { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../Contexts/UsersContext';
import axios from 'axios'
import { Link } from 'react-router-dom'

function LoginComp(props) {
    let loginBool = false;
    const [users, setUsers] = useContext(UsersContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(async () => {
        let resp = await axios.get("mongodb+srv://eladg123:eladg123@mern-chicago-bulls.eissr.mongodb.net/mern-chicago-bulls?retryWrites=true&w=majority/api/profiles");
        setUsers(resp.data);
    }, [])
    const loginFunc = async () => {
        users.forEach(user => {
            if (user.username == username && password == user.password) {
                loginBool = true;
                let profileJSON = JSON.stringify(user);
                sessionStorage.setItem("profile", profileJSON);
                sessionStorage.setItem("id", user._id);
                props.history.push("/Main")
            }
        });
        if (loginBool != true) {
            alert("Username or password incorrect! Please try again")
        }
    }
    return (<div>

        <span style={{ alignItems: "left", fontSize: "30px" }} class="badge rounded-pill bg-danger">Login Page </span> <br></br>
        <span style={{ color: "white", fontSize: "30px" }}>Username:</span> <input onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter username" /> <br></br>
        <span style={{ color: "white", fontSize: "30px" }}>Password:</span> <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter password" /> <br></br>
        <input type="button" value="Login" onClick={loginFunc} /> <Link to="/createAccount" style={{ color: "white" }}>Register</Link>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>







    </div >)
}

export default LoginComp;