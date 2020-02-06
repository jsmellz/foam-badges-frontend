import React from 'react';
import '../App.css';
import { ClassicSpinner } from 'react-spinners-kit';


const RowButton = props => {

    switch(props.rowState) {
        case "unqualified":
            return <div className="Row-Button" style={{backgroundColor:"#FF8080"}}>You need to verify {props.pointsLeft} more points. </div>;
          break;
        case "qualified":
            return <div className="Row-Button" style={{backgroundColor:"#74F0B4"}}><div style={{paddingRight:"40px"}}>You’re qualified!</div><button className="Collected-Button">Collect Badge</button></div>;
          break;
        case "collected":
            return <div className="Row-Button" style={{backgroundColor:"#80A5FF"}}>Congrats! You’ve collected this badge.</div>;
            break;
        case "loading":
            return <div className="Row-Button" style={{backgroundColor:"#C5C3C3"}}><ClassicSpinner size={13} color="#686769"/><div style={{paddingLeft:"10px"}}>Checking qualifications…</div></div>;
            break;
        default:
            return <div/>;
      }
}


export default RowButton