import React from 'react';
import '../App.css'
import RowButton from './row-button';

const BadgeRow = props => {

    return (

        <div className="Row-Container">

            <div className="Badge-Container"> 
                <div className="Badge-Image"><img style={{width:"40px",height:"40px", textAlign:"center"}} src={props.badge.image}/></div>
                <div className="Badge-Text-Container">
                    <div className="Badge-Title">{props.badge.badgeName}</div>
                    <div className="Badge-Description">{props.badge.badgeDescription}</div>
                </div>
            </div>

            <RowButton rowState={props.badge.badgeState} pointsLeft={props.badge.pointsLeft}/>

        </div>
    )
}

export default BadgeRow