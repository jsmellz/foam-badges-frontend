import React, {useState} from 'react';
import './App.css';
import BadgeRow from './components/badge-row'
import {useEventListener} from './hooks/hooks';
// import classnames from "classnames";

function App() {

  const [badges, setBadges] = useState([
     {
      badgeName: "badge name",
      badgeDescription: "Badge description",
      image: "image url",
      badgeState: ""
    },
    {
      badgeName: "badge name",
      badgeDescription: "Badge description",
      image: "image url",
      badgeState: ""
    },
    {
      badgeName: "badge name",
      badgeDescription: "Badge description",
      image: "image url",
      badgeState: ""
    }
  ]);



  return (
      <div className="Container">
        <div className="Background"/>
        {badges.map((badge, key) => <BadgeRow badge={badge} key={key}/>)}
      </div>
  );
}

export default App;
