import axios from 'axios';
import React, { useState } from 'react'


function CreateAccount(props) {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [job, setJob] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [birth, setBirth] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");
    const [repass, setRepass] = useState("");
    const [gender, setGender] = useState();

    const createProfile = async () => {
        if ((fname != "" || lname != "" || job != "" || city != "" || address != "" || email != "" ||
            age != "" || birth != "" || username != "" || password != "") && password == repass) {
            let newProfile = {
                fName: fname, lName: lname, job: job, city: city, address: address, email: email, age: age, birthDate: birth,
                username: username, password: password, gender: gender
            };
            await axios.post("https://eccomerce-mern-chicago-bulls.herokuapp.com/api/profiles", newProfile);
            sessionStorage.setItem("name", fname);
            props.history.push("/Enjoy");


        }
        else if (fname == "" || lname == "" || job == "" || city == "" || address == "" || email == "" ||
            age == "" || birth == "" || username == "" || password == "" || repass == "") {
            alert("Please fill your details below")
        }
        else if (password != repass) {
            alert("Passwords do not match")
        }
    }
    const backPage = () => {
        props.history.push("/");
    }
    return (<div>
        <span style={{ alignItems: "left", fontSize: "30px" }} class="badge rounded-pill bg-danger">Create Account Page </span>
        <div style={{ textAlign: "left" }}>
            <span style={{ color: "white", fontSize: "15px" }}>First Name:</span> <input type="text" onChange={e => setFname(e.target.value)} /> <br></br>
            <span style={{ color: "white", fontSize: "15px" }}> Last Name:</span> <input type="text" onChange={e => setLname(e.target.value)} /> <br></br>
            <span style={{ color: "white", fontSize: "15px" }}>Job:</span> <input type="text" onChange={e => setJob(e.target.value)} /> <br></br>
            <span style={{ color: "white", fontSize: "15px" }}>City:</span> <input type="text" onChange={e => setCity(e.target.value)} /> <br></br>
            <span style={{ color: "white", fontSize: "15px" }}>Address:</span> <input type="text" onChange={e => setAddress(e.target.value)} /> <br></br>
            <span style={{ color: "white", fontSize: "15px" }}>Email:</span> <input type="text" onChange={e => setEmail(e.target.value)} /> <br></br>
            <span style={{ color: "white", fontSize: "15px" }}>Age:</span> <input type="number" min="0" onChange={e => setAge(e.target.value)} /> <br></br>
            <span style={{ color: "white", fontSize: "15px" }} >Gender:  </span> '&nbsp;'
            <input class="form-check-input" type="radio" name="gender" id="male" onChange={e => { setGender(e.target.id) }} />
            <label style={{ color: "white" }} class="form-check-label" >
                Male
            </label>
            '&nbsp;'
            <input class="form-check-input" type="radio" name="gender" id="female" onChange={e => { setGender(e.target.id) }} />
            <label style={{ color: "white", fontSize: "15px" }} class="form-check-label" >
                Female
            </label>
            <br></br>
            <span style={{ color: "white", fontSize: "15px" }}> Birth date:</span> <input type="date" onChange={e => setBirth(e.target.value)} /> <br></br>
            <span style={{ color: "white", fontSize: "15px" }}> Username:</span> <input type="text" onChange={e => setUsername(e.target.value)} /> <br></br>
            <span style={{ color: "white", fontSize: "15px" }}>Password:</span> <input type="password" onChange={e => setPass(e.target.value)} /> <br></br>
            <span style={{ color: "white", fontSize: "15px" }}> Retype password:</span> <input type="password" onChange={e => setRepass(e.target.value)} /> <br></br>
            <input type="submit" class="btn btn-primary" onClick={createProfile} />   '&nbsp;' <input class="btn btn-dark" type="button" value="Back" onClick={backPage} />
        </div>
        <br></br> <br></br> <br></br> <br></br><br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br>


    </div>)
}
export default CreateAccount;