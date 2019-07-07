import React from 'react'

const UpcomingEvents = props => {
    return(
        <div>
            <h2>Upcoming Events</h2>
            <ul>
                { props.events.map((event, key) => <li key={key}>{event.name}, {event.location}</li>)}
            </ul>
        </div>
    )
}

export default UpcomingEvents