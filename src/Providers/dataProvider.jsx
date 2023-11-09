import React, { createContext, useContext, useState } from "react";
import { options3, options5 } from "../data";

export const DataContext = createContext();

export default function DataProvider(props) {

  //states
  const [compChoice, setCompChoice] = useState('None');
  const [userChoice, setUserChoice] = useState('Rock');
  const [game, setGame] = useState(options5);
  const [result, setResult] = useState('');

  function userClick(name) {
    setUserChoice(name);
    //set to just the name, not whole object??
    console.log("setting user pick to:", userChoice);
    compChooses(game.length);
  };

  function compChooses(max) {
    let randomIndex = Math.floor(Math.random() * max);
    console.log("comp pick", game[randomIndex].name);
    setCompChoice(game[randomIndex]);
    //sets compChoice state to the entire object 
  };

  function chooseGame(number) {
    setGame(`options${number}`);
    console.log("setting game to", number, game);
  }

  const providerData = {
    compChoice,
    userChoice,
    game,
    result,
    userClick,
    chooseGame,
  };

  return (
    <DataContext.Provider value={providerData}>
      {props.children}
    </DataContext.Provider>
  );
}