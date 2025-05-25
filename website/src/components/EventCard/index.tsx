import { useState } from 'react'
import './index.css'
import type { UpcomingEvent, PastEvent } from '../../types/events'


interface EventCardProps {
    event: PastEvent | UpcomingEvent;
}

function EventCard ({event}: EventCardProps) {

    return (
        <div className="event-card">
            <h2 className="event-title">{event.name}</h2>
            <p className="event-description">{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>
            <p><strong>Location:</strong> {event.location}</p>
        </div>
    );
}

export default EventCard;

