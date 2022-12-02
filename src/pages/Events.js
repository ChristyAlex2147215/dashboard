import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import './events.css';

function Event({user_event}) {
  console.log(user_event.image)

  const [bgc,set_bgc] = useState("")

  const randombg =()=>
  {
    var bgcl=['card-body bg-primary','card-body bg-dark','card-body bg-secondary','card-body bg-warning','card-body bg-success']
    console.log(Math.round(Math.random(0,5)))
    set_bgc(bgcl[Math.round(Math.random(0,5))])
  }
  return (
    <>
        <div class="cardcontainer">
            <div class="photo">
                <img src={user_event.image}/>
                <div class="photos">Photos</div>
            </div>
            <div class="content">
                <p class="txt4">{user_event.name}</p>
                <p class="txt5">{user_event.data}</p>
                <p class="txt2">{user_event.description}</p>
            </div>
            <div class="footer">
                <p><a class="waves-effect waves-light btn" href="#">Read More</a><a id="heart"><span class="like"><i class="fab fa-gratipay"></i>Like</span></a></p>
                <p class="txt3"><i class="far fa-clock"></i>10 Minutes Ago <span class="comments"><i class="fas fa-comments"></i>45 Comments</span></p>
            </div>
        </div>
    </>
  )
}

export default Event