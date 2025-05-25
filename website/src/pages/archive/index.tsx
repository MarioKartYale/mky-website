import { useEffect, useState } from 'react'
import exampleData from '../../example-json/races.json'
import { type Race } from '../../types/races'

import './index.css'

function Archive() {
  const [races, setRaces] = useState<Race[]>();

  useEffect(() => {
    // Placeholder for fetching data from API
    // ---
    let data = exampleData;
    // ---

    setRaces(data.races);
  })

  return (
    <>
      <div>
        <div className="archive-header">
          <h1>Race Archive</h1>
          <p>See and filter the results from past races</p>
        </div>
        <div className="archive-search">
          <p>Filters:</p>
        </div>
        <div className="archive-table">
          <div className="archive-table-header">
            <span>Event</span>
            <span>Date</span>
            <span>Time</span>
            <span>Track</span>
            <span>Winner</span>
            <span>College</span>
          </div>

          {races && races.map((race) => {
            let sorted = [...race.results];
            let winner = sorted.sort((a, b) => a.place - b.place)[0];

            return (
              <div className="archive-table-body">
                <span>{race.eventName}</span>
                <span>{race.time.substring(0, 10)}</span>
                <span>{race.time.substring(11, 16)}</span>
                <span>{race.track}</span>
                <span>{winner.name}</span>
                <span>{winner.college}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Archive