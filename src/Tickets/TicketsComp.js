import React, { useEffect, useState } from 'react'
import axios from 'axios'


function TicketsComp(props) {
    const [currentUser, setUser] = useState();
    const [games, setGames] = useState();
    useEffect(async () => {
        let resp = await axios.get("https://eccomerce-mern-chicago-bulls.herokuapp.com/api/games");
        let resp2 = await axios.get(`https://eccomerce-mern-chicago-bulls.herokuapp.com/api/profiles/${sessionStorage.getItem("id")}`)
        setGames(resp.data)
        setUser(resp2.data);
    }, [])
    let gamesToRender;

    // const buyTicket = async (game) => {
    // let bool = false;
    // console.log(game._id)
    // if (currentUser.tickets.length == 0) {
    //     //  let filterTickets = games.filter(game => (game._id == ticketID));
    //     console.log(currentUser.tickets)

    // }
    //let filterTickets = games.filter(game => (game._id == ticketID));
    //let gameBougthCheck = currentUser.tickets.filter(game => (game.date == filterTickets[0].date));
    // if (gameBougthCheck.lenght > 0) {
    //     bool = true;
    // }
    // console.log(currentUser)
    // if (bool == false) {
    //  let updatedUser = currentUser;
    ////  updatedUser.tickets = [...updatedUser.tickets, {
    //      date: filterTickets[0].date,
    //against: filterTickets[0].opponent,
    //        price: filterTickets[0].price
    //    }]
    //   await axios.put(`mongodb+srv://eladg123:eladg123@mern-chicago-bulls.eissr.mongodb.net/mern-chicago-bulls?retryWrites=true&w=majority/api/profiles/${sessionStorage.getItem("id")}`, updatedUser);
    //   setUser(updatedUser);
    //      alert("Thank you for buying ticket for our game, have fun and hope to see you in another fights this season");
    //  else if (bool == true) {
    //     alert("You already bought this ticket!")
    //     // }
    //  }
    // }

    if (games) {
        gamesToRender = games.map(game => {
            return (<tr key={game._id}><td>{game.date.slice(0, 10)}</td><td>{game.opponent}</td><td>{game.stadium}</td><td>{game.price}$</td> <td><input id={game._id} onClick={async () => {
                let bool = false;
                let filterTickets = games.filter(ticket => (game._id == ticket._id));
                if (currentUser.tickets.length == 0) {
                    let profileToUpdate = currentUser;
                    profileToUpdate.tickets = [{ date: filterTickets[0].date, against: filterTickets[0].opponent, price: filterTickets[0].price }];
                    await axios.put(`https://eccomerce-mern-chicago-bulls.herokuapp.com/api/profiles/${sessionStorage.getItem("id")}`, profileToUpdate);
                    setUser(profileToUpdate);
                    alert("Thank you for buying ticket for our game, have fun and hope to see you in another fights this season");
                }
                else if (currentUser.tickets.length > 0) {
                    let userTickets = currentUser.tickets.filter(ticket => (ticket.date == filterTickets[0].date));
                    if (userTickets.length == 0) {
                        let updatedProfile = currentUser;
                        updatedProfile.tickets = [...updatedProfile.tickets, { date: filterTickets[0].date, against: filterTickets[0].opponent, price: filterTickets[0].pric }];
                        await axios.put(`https://eccomerce-mern-chicago-bulls.herokuapp.com/api/profiles/${sessionStorage.getItem("id")}`, updatedProfile);
                        setUser(updatedProfile);
                        alert("Thank you for buying ticket for our game, have fun and hope to see you in another fights this season");
                    }
                    else if (userTickets.length > 0) {
                        alert("You already bought this ticket!");
                    }

                }
            }} class="btn btn-success" type="button" value="Buy now" /></td></tr>)
        })
    }


    return (<div class="table table-dark"  >

        <table align="center" >
            <tr> <td>Date</td>     <td>Opponent</td>     <td>Stadium</td><td>Price </td> <td>Buy now</td>  </tr>
            {gamesToRender}
        </table>
    </div>)
}

export default TicketsComp;