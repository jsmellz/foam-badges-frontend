import React from 'react';
import '../App.css';
import { ClassicSpinner } from 'react-spinners-kit';


const RowButton = props => {

    switch(props.rowState) {
        case "unqualified":
            return <div className="Row-Button" style={{backgroundColor:"#F9B034"}}>You need to verify {props.pointsLeft} more points. </div>;
          break;
        case "qualified":
            return <div className="Row-Button" style={{backgroundColor:"#27AF60"}}><div style={{paddingRight:"20px"}}>You can collect this badge.</div><button className="Collected-Button">Collect</button></div>;
          break;
        case "collected":
            return <div className="Row-Button" style={{backgroundColor:"#2f80ed"}}>You’ve collected this badge.</div>;
            break;
        case "loading":
            return <div className="Row-Button" style={{backgroundColor:"#C5C3C3",}}><ClassicSpinner size={13} color="#686769"/><div style={{paddingLeft:"10px", color:"black"}}>Checking qualifications…</div></div>;
            break;
        default:
            return <div/>;
      }
}


export default RowButton