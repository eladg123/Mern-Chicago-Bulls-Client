import React from 'react'


function EnjoyComp(props) {

    const signIn = () => {
        props.history.push("/")
    }
    let name = sessionStorage.getItem("name");
    return (<div> <br></br> <br></br>
        <span style={{ fontSize: "30px", color: "white" }}>Hey {name} ✋🏻,
            We are glad for your <br></br>
            joining to our fans team.<br></br>
            Feel free to buy tickets<br></br>
            to our new 2021/2022 season.<br></br>
            We are hope to see you<br></br>
            in the stadium soon.<br></br>
            Chicago Bulls ⛹️‍♂️  </span><br></br>
        <input type="button" class="btn btn-warning" value="Sign in" onClick={signIn} />
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>


    </div>)
}

export default EnjoyComp;