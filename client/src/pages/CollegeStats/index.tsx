// client/src/pages/CollegeStats/index.tsx

import { useEffect, useState } from 'react'
import exampleData from '../../example-json/races.json'
import { type Race } from '../../types/races'
import { type Player } from '../../types/players';
import players from '../../example-json/players.json';
import './index.css'
import { useParams } from 'react-router';
import BestRace from '../../components/BestRace';


function CollegeStats() {

    const [college, setCollege] = useState<string | null>(null);
    const [p, setP] = useState<Player[] | null> (null);
    const params = useParams();

    useEffect(() => {
    // Placeholder for fetching data from API
    // ---
    let data = players;
    // ---
    
    setCollege(params.college ?? null);
    
    const filteredPlayers = params.college ? data.players.filter(
      (player) => player.college === params.college
    ) : null;    
    
    const sortedFilteredPlayers = filteredPlayers ? filteredPlayers.sort((a, b) => b.totalPoints - a.totalPoints): null;
    setP(sortedFilteredPlayers);

  }, [params]);


  return (

    <div className="college-stats-container">
  <img src={`../../${college} logo.png`} alt={`${college} logo`} className="college-logo2"/>
  <h1 className="college-heading">Top Players from {college}</h1>

  <ol className="player-list">
    {p &&
      p.map((pp) => (
        <li key={pp.netid} className="player-item">
          <strong>{pp.name}</strong>: {pp.totalPoints} points in {pp.numberRaces} races.
          <BestRace player={pp} />
        </li>
      ))}
  </ol>
</div>

  )

}


export default CollegeStats;