import React, {useState} from 'react';
import './App.css';
import BadgeRow from './components/badge-row'
import BronzeImage from "./bronze.png";
import SilverImage from "./silver.png";
import PilgrimImage from "./pilgrim.png";
import TastemakerImage from "./tastemaker.png";
import ShopaholicImage from "./shopaholic.png";

import {useEventListener} from './hooks/hooks';
// import classnames from "classnames";

function App() {

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
      image: PilgrimImage,
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
    }
  ]);



  return (
      <div>
        <div className="Navigation-Bar">
          <div className="Navigation-Title"> Foam Badges</div>
        </div>
        <div className="Container"> 
          <div className="Background"/>
          {badges.map((badge, key) => <BadgeRow badge={badge} key={key}/>)}
        </div>
      </div>
  );
}

export default App;
