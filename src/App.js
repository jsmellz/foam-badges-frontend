import React, {useState, createContext} from 'react';
import './App.css';
import BadgeRow from './components/badge-row'
import CheckProvider from './components/MetaMask/checkProvider/checkprovider';
import AlertRow from './components/alert-row'

import BronzeImage from "./bronze.png";
import SilverImage from "./silver.png";
import PilgrimImage from "./pilgrim.png";
import TastemakerImage from "./tastemaker.png";
import ShopaholicImage from "./shopaholic.png";
import FoamHeader from "./foam-header.png";
// import { InjectedConnector } from '@web3-react/injected-connector'

function App() {

  const [address, setAddress] = useState();

  const [badges, setBadges] = useState([
     {
      badgeName: "Bronze Local",
      badgeDescription: "50 Verified points added with City tag.",
      image: BronzeImage,
      badgeState: "unqualified",
      pointsLeft: 50,
    },
    {
      badgeName: "Silver Local",
      badgeDescription: "100 Verified points added with City tag.",
      image: SilverImage,
      badgeState: "qualified"
    },
    {
      badgeName: "Pilgrim",
      badgeDescription: "Verified points added with Religion tag.",
      image: "https://foamstorage.blob.core.windows.net/badge-images/pilgrim.png",
      badgeState: "collected"
    },
    {
      badgeName: "Tastemaker",
      badgeDescription: "Verified points added with Food tag.",
      image: TastemakerImage,
      badgeState: "loading"
    },
    {
      badgeName: "Shopaholic",
      badgeDescription: "Verified points added with Retail tag.",
      image: ShopaholicImage,
      badgeState: "loading"
    },
    {
      badgeName: "Tastemaker",
      badgeDescription: "Verified points added with Food tag.",
      image: TastemakerImage,
      // badgeState: "loading"
    },
    {
      badgeName: "Shopaholic",
      badgeDescription: "Verified points added with Retail tag.",
      image: ShopaholicImage,
      // badgeState: "loading"
    }
  ]);

  const [alertState, setAlertState] = useState("no-web3")

  // web3 setup

  // const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })

 
  // const Infura = new NetworkOnlyConnector({
  //   providerURL: 'https://mainnet.infura.io/v3/...'
  // })
 
  // const connectors = { MetaMask, Infura }
  // const connectors = { MetaMask }

  // console.log(context.account)
  return (
    // <Web3Provider
    //   connectors
    //   libraryName={'ethers.js'|'web3.js'|null}
    // >
      <div>
        <div className="Container"> 
        <div className="Navigation-Bar">
          <div className="Navigation-Title"><img src={FoamHeader} style={{height:"30px"}}/><div>Badges</div></div>
        </div>
          <div className="Background"/>
          <CheckProvider/>
          {/* <AlertRow alertState={alertState}/> */}
          {badges.map((badge, key) => <BadgeRow badge={badge} key={key}/>)}
        </div>
      </div>
    // </Web3Provider>
  );
}

export default App;
