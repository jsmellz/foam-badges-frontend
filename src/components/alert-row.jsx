import React, { useEffect } from 'react'
import '../App.css'
const AlertRow = props => {
    switch(props.alertState) {
      case "unlockMetaMask":
              
        return  <div className="Row-Container" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
                    <div className="Alert-Row" style={{backgroundColor:"#2f80ed"}}> 
                        <button style={{color:"white", backgroundColor:"2f80ed"}} className="Alert-Button">Click on MetaMask and unlock it to continue.</button>
                    </div>
                </div>
        break;
        case "wrongNetwork":
              
            return  <div className="Row-Container" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
            <div className="Alert-Row" style={{backgroundColor:"#2f80ed"}}> 
                          <button style={{color:"white", backgroundColor:"2f80ed"}} className="Alert-Button">Please change your network the main Ethereum network.</button>
                      </div>
                  </div>
        break;
        case "unlockAccount":
            
            return  <div className="Row-Container" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
            <div className="Alert-Row" style={{backgroundColor:"#2f80ed"}}> 
                          <button style={{color:"white", backgroundColor:"2f80ed"}} className="Alert-Button">Please unlock your account.</button>
                      </div>
                  </div>
        break;
        case "installMetaMask":
          
            return  <div className="Row-Container" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
            <div className="Alert-Row" style={{backgroundColor:"#2f80ed"}}> 
                         {/* <a href="https://metamask.io/" target="_blank"></a> */}
                            <a href="https://metamask.io/" style={{color:"white", backgroundColor:"2f80ed"}} className="Alert-Button">Install Metamask to see your Foam badges.</a>
                        </div>
                    </div>
          break;
        case "no-discourse":
            return  <div className="Row-Container" style={{backgroundColor:"transparent", borderColor:"transparent"}}>
            <div className="Alert-Row" style={{backgroundColor:"#27AF60"}}> 
                            <button style={{color:"#27AF60", backgroundColor:"white"}} className="Alert-Button">Add Discourse Username</button>
                        </div>
                    </div>
          break;
        default:
            return <div/>;
      }
}
  

export default AlertRow
