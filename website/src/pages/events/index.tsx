import { useEffect, useState } from 'react'
import exampleData from '../../example-json/events.json'
import { type PastEvent, type UpcomingEvent } from '../../types/events'

function Events() {
  const [pastEvents, setPastEvents] = useState<PastEvent[]>();
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>();

  useEffect(() => {
    // Placeholder for fetching data from API
    // ---
    let data = exampleData;
    // ---

    setPastEvents(data.past);
    setUpcomingEvents(data.upcoming);
  })

  return (
    <>
      <div>
        <h1>Upcoming Events</h1>
        {upcomingEvents && upcomingEvents.map((event) => (
          <div key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>From: {event.startTime} To: {event.endTime}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
        <h1>Past Events</h1>
        {pastEvents && pastEvents.map((event) => (
          <div key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>From: {event.startTime} To: {event.endTime}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Events