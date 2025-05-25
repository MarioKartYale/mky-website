import { useEffect, useState } from 'react'
import exampleData from '../../example-json/events.json'
import { type PastEvent, type UpcomingEvent } from '../../types/events'
import EventCard from "../../components/EventCard"

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
            <EventCard event={event}/>
          </div>
        ))}
        <h1>Past Events</h1>
        {pastEvents && pastEvents.map((event) => (
          <div key={event.id}>
            <EventCard event={event}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Events