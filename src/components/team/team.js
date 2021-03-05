import React from 'react'
import TeamMember from '../teamMember/teamMember'
import team from '../../content/team.json';

function Team() {
    return (
        <div className="team" id="team">
            <div className="team__viewport">
                <div className="team__description">
                    <h2 className="team__title">This is what we do</h2>
                    <h3 className="team__title">about smarto</h3>
                    <p className="team__copy">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                </div>
            </div>
            <div className="team__members">
                {team.map((teamMember, index) => {
                    return(
                        <TeamMember 
                            key={teamMember.id}
                            id={index}
                            name={`${teamMember.name}`}
                            description={`Minimum version ${teamMember.description}`}
                            linkedIn={teamMember.linkedIn}
                            reverse={(index % 2 != 0) ? true : false}
                        />
                    );
                })}
            </div>
        </div>  
    )
}

export default Team


