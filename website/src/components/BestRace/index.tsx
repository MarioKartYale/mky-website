import { useEffect, useState } from 'react'
import './index.css'
import { type Race } from '../../types/races'
import { type Player } from '../../types/players'
import exampleData from '../../example-json/races.json'


interface BestRaceProps {
    player: Player
}

function parseTimeToSeconds(timeStr: string): number | null {
  const parts = timeStr.split(':');
  if (parts.length !== 2) return null;

  const minutes = parseInt(parts[0]);
  const seconds = parseFloat(parts[1]);

  if (isNaN(minutes) || isNaN(seconds)) return null;

  return minutes * 60 + seconds;
}

function BestRace({player}: BestRaceProps) {

    const [bestTime, setBestTime] = useState<string | null> (null);
    const [bestRace, setBestRace] = useState<Race | null> (null);

    useEffect(() => {
    // Placeholder for fetching data from API
    // ---
    let data = exampleData;
    // ---

    const races = data.races;
    const player_races = races.filter(race => player.raceIds.includes(race.id));

    let bestrace: Race | null = null;
    let bestTimeInSeconds: number | null = null;
    let bestRaceId: number | null = null;
    let bestLapStr: string | null = null;

    player_races.forEach(race=> {

        const result = race.results.find(r => r.netid == player.netid);
        if (result && result.lap3) {
            const timeInSeconds = parseTimeToSeconds(result.lap3);

            if (timeInSeconds != null && (bestTimeInSeconds == null || timeInSeconds < bestTimeInSeconds)) {
                bestTimeInSeconds = timeInSeconds;
                bestLapStr = result.lap3;
                bestRaceId = race.id;
                bestrace = race;
            }
        }

    });
    if (bestLapStr && bestRaceId !== null) {
    setBestTime(bestLapStr);
    setBestRace(bestrace);
    }
  }, [player]);

  return (

    <div className="player-best-race">
        {bestRace && 
        <p> Best time: {bestTime} (track: {bestRace.track} at {bestRace.time.substring(11, 16)} on {bestRace.time.substring(0, 10)})  </p>}
    </div>

  );

}

export default BestRace;