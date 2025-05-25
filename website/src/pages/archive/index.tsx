import { useEffect, useState } from 'react'
import exampleData from '../../example-json/races.json'
import { type Race } from '../../types/races'

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
        <h1>Past Races</h1>
        {races && races.map((race) => (
          <div key={race.id}>
            <h3>{race.eventName}</h3>
            <p>{race.time}</p>
            {race.results.map((result) => (
              <div key={result.netid}>
                <h4>Name: {result.name}</h4>
                <p>College: {result.college}</p>
                <p>Place: {result.place}</p>
                <p>Points: {result.points}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default Archive