// client/src/pages/leaderboard/index.tsx

import TeamList from '../../components/TeamList';
import './index.css'

import { useEffect, useState } from 'react';
import exampleData from '../../example-json/totalScores.json';
import { type ScoreSet } from '../../types/scores';

function Leaderboard() {
  const [scores, setScores] = useState<ScoreSet[]>();

  useEffect(() => {
    // Placeholder for fetching data from API
    // ---
    let data = exampleData;
    // ---
    const sorted = data.scores == undefined ? undefined: data.scores.sort((a, b) => b.points - a.points);
    setScores(sorted);
  }, [])


  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <img src="/trophy.png" alt="Trophy" className="trophy" />
        <h1 className="title">Leaderboard</h1>
        <img src="/trophy.png" alt="Trophy" className="trophy" />
      </div>
      <div className="leaderboard-body">
      <TeamList teams={scores}/>
    </div>
      {/* <h1>Example Scores</h1>
      {scores && scores.map((score) => (
          <div key={score.id}>
            <h3>{score.college}</h3>
            <p>Points: {score.points}</p>
            <p>Games: {score.games}</p>
          </div>
          
        ))} */}
        
    </div>
  );
}

export default Leaderboard;

