import { useState } from 'react'
import './index.css'
import { Team } from '../Team.ts'
import  TeamProfile from '../TeamProfile/index.tsx'

interface TeamListProps {
    teams: Team[]
}

function TeamList ({teams}: TeamListProps) {

    return (
        <div className="row">
            {teams.map((team) => 
            (<div key={team.id} className="team-row">
               <TeamProfile team={team}/> </div>))}
        </div>
    )
}

export default TeamList;