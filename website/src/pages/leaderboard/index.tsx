import TeamList from '../../components/TeamList';
import './index.css'
import { TEMP_TEAMS } from '../../components/TEMP_TEAMS';

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

    setScores(data.scores);
  })

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <img src="/trophy.png" alt="Trophy" className="trophy" />
        <h1 className="title">Leaderboard</h1>
        <img src="/trophy.png" alt="Trophy" className="trophy" />
      </div>
      <TeamList teams={TEMP_TEAMS}/>
      <h1>Example Scores</h1>
      {scores && scores.map((score) => (
          <div key={score.id}>
            <h3>{score.college}</h3>
            <p>Points: {score.points}</p>
            <p>Games: {score.games}</p>
          </div>
        ))}
    </div>
  );
}

export default Leaderboard;

