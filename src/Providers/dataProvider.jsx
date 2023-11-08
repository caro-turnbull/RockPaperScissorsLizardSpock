import React, { createContext, useContext, useState } from "react";
import { options3, options5 } from "../data";

export const DataContext = createContext();

export default function DataProvider(props) {

  //states
  const [compPick, setCompPick] = useState('None');
  const [userPick, setUserPick] = useState('Rock');
  const [game, setGame] = useState(options5);
  const [result, setResult] = useState('');
  console.log("game in the provider", game);

  const providerData = {
    compPick,
    userPick,
    game,
    result
  };

  return (
    <DataContext.Provider value={providerData}>
      {props.children}
    </DataContext.Provider>
  );
}