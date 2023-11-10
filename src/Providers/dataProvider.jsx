import React, { createContext, useContext, useState } from "react";
import { options3, options5 } from "../data";

export const DataContext = createContext();

export default function DataProvider(props) {

  //states
  const [compChoice, setCompChoice] = useState('None');
  const [userChoice, setUserChoice] = useState('Rock');
  const [game, setGame] = useState(options5);
  const [result, setResult] = useState('');

  function chooseGame(number) {
    setGame(number === 3 ? options3 : options5);
    // setGame(`options${number}`);
    console.log("setting game to", number, game);
    console.log("whats this game look like", game);
  }

  function userClick(name) {
    setUserChoice(name);
    //set to just the name, not whole object??
    // console.log("setting user pick to:", userChoice);
    // console.log("game", game);
    compChooses(game.length);
    getResults(userChoice, compChoice.name);
    console.log("are we gertting results?", result);
  };

  function compChooses(max) {
    let randomIndex = Math.floor(Math.random() * max);
    console.log("comp pick", game[randomIndex].name);
    setCompChoice(game[randomIndex]);
    //sets compChoice state to the entire object 
  };


  //why is this function declaration different?
  const getResults = (userChoice, compChoice) => {
    console.log("are we getting the states?", userChoice, compChoice);
    switch (userChoice + compChoice) {
      case "RockScissors":
      case "ScissorsPaper":
      case "PaperRock":
        setResult('winner');
        console.log("arethereanycases", result);
        break;
      case "RockPaper":
      case "ScissorsRock":
      case "PaperScissors":
        setResult('looser');
        console.log("arethereanycases", result);
        break;
      default:
        setResult('');
        break;
      //lowercase winner/looser
    }
  };

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