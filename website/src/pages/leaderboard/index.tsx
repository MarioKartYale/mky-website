import TeamList from '../../components/TeamList';
import './index.css'
import { TEMP_TEAMS } from '../../components/TEMP_TEAMS';

function Leaderboard() {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <img src="/trophy.png" alt="Trophy" className="trophy" />
        <h1 className="title">Leaderboard</h1>
        <img src="/trophy.png" alt="Trophy" className="trophy" />
      </div>
      <TeamList teams={TEMP_TEAMS}/>
    </div>
  );
}

export default Leaderboard;

