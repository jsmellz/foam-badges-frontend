import React from 'react';
import '../App.css'
import RowButton from './row-button';

const BadgeRow = props => {

    console.log(props)
    return (

        <div className="Row-Container">

            <div className="Badge-Container"> 
                <div className="Badge-Image">{props.badge.image}</div>
                 <div className="Badge-Text-Container">
                    <div className="Badge-Title">{props.badge.badgeName}</div>
                    <div className="Badge-Description">{props.badge.badgeDescription}</div>
                </div>
            </div>

            <RowButton rowState={props.badge.badgeState}/>

        </div>
    )
}

export default BadgeRow