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
import {useDataApi} from "./hooks/hooks"

function App() {

  const [url, setUrl] = useState('https://foam-badges-api.azurewebsites.net/api/GetBadges?code=hCaGRJkkobWcEJHGWinB/a3UKIeosu186xNdKoSbZYGXkl/dKhOuQQ==');

  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    url,
    { badges: [] },
  );

  const [initialLoad, setInitialLoad] = useState(false);

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
      image: TastemakerImage
    },
    {
      badgeName: "Shopaholic",
      badgeDescription: "Verified points added with Retail tag.",
      image: ShopaholicImage
    }
  ]);

  const changeToLoading = () => {
    data.badges.forEach(badge => {
      badge.badgeState = "loading"
    });
  }

  
  return (
      <div>
        <div className="Container"> 
        <div className="Navigation-Bar">
          <div className="Navigation-Title"><img src={FoamHeader} style={{height:"30px"}}/><div>Badges</div></div>
        </div>
          <div className="Background"/>
          <CheckProvider doFetch={doFetch} url={url}/>
          {isError && <div>Something went wrong ...</div>}
          
          {isLoading ? (
          
            <div style={{color:"white"}}>Loading ...</div>
            ) : (
            <div>
              { 
                data.badges.map((badge, key) => <BadgeRow badge={badge} key={key}/> )
              }
            </div>
          )}

        </div>
      </div>
  );
}

export default App;
