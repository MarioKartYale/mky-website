import { useState } from 'react'
import './index.css'
import { Team } from '../Team.ts'
import type { ScoreSet } from '../../types/scores.tsx'

interface TeamListProps {
    teams: ScoreSet[] | undefined;
}

function TeamList ({teams}: TeamListProps) {

    return (
        <div className="row">
            <div className="team-row team-header">
                <img src="Yale logo.png" alt="Yale logo.png" className="college-logo"/>
                <span className="team-name">College</span>
                <span className="team-points">Points</span>
                <span className="team-games">Games</span>
            </div>
            {teams && teams.map((team) => 
            (<div key={team.id} className="team-row">
                <img src={`${team.college} logo.png`} alt={`${team.college} logo`} className="college-logo"/>
               <span className="team-name">{team.college}</span>
                <span className="team-points">{team.points}</span>
                <span className="team-games">{team.games}</span> </div>))}
        </div>
    )
}

export default TeamList;