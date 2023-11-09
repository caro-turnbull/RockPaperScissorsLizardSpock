import React, { createContext, useContext, useState } from "react";
import { options3, options5 } from "../data";

export const DataContext = createContext();

export default function DataProvider(props) {

  //states
  const [compChoice, setcompChoice] = useState('None');
  const [userChoice, setUserChoice] = useState('Rock');
  const [game, setGame] = useState(options5);
  const [result, setResult] = useState('');

  function userClick(name) {
    setUserChoice(name);
    console.log("setting user pick to:", userChoice);
    compChooses;
  };

  function compChooses() {
    //random pick here
  };

  const providerData = {
    compChoice,
    userChoice,
    game,
    result,
    userClick
  };

  return (
    <DataContext.Provider value={providerData}>
      {props.children}
    </DataContext.Provider>
  );
}