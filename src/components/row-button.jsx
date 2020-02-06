import React from 'react';
import '../App.css';

const RowButton = props => {

    switch(props.rowState) {
        case "unqualified":
            return <div className="Row-Button" style={{backgroundColor:"green"}}>Row Button</div>;
          break;
        case "qualified":
            return <div className="Row-Button" style={{backgroundColor:"purple"}}>Row Button</div>;
          break;
        case "collected":
            return <div className="Row-Button" style={{backgroundColor:"orange"}}>Row Button</div>;
            break;
        case "loading":
            return <div className="Row-Button" style={{backgroundColor:"yellow"}}>Row Button</div>;
            break;
        default:
            return <div className="Row-Button" style={{backgroundColor:"white"}}>Row Button</div>;
      }
}


export default RowButton