import React from 'react'
import events from '../artifacts/user_events'
import Event from './Events'
import 'bootstrap/dist/css/bootstrap.css';

function Notes() {
  return (
    <div className="container text-center border">
      <h1>Up coming events</h1>
      <div className='row'>
        {events.map(event=>(
          <div className='col' key={event._id} sm={12} md={6} lg={4} xl={3}>
           <Event user_event={event}/>
          </div>
        )) 

        }
      </div>
    </div>
  )
}

export default Notes