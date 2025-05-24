import { useState } from 'react'
import './index.css'
import { Team } from '../Team.ts'

interface TeamProfileProps {
    team: Team;
}


function TeamProfile({team}: TeamProfileProps) {

    return (
        <div className='team-profile'>
        <span className='team-name'> {team.name}:</span>
        <span className='team-points'>{team.points}</span>
        </div>
    );
}


export default TeamProfile;