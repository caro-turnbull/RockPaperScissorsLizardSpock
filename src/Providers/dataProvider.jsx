import React, { createContext, useContext, useEffect, useState } from "react";
import { options3, options5 } from "../data";
import Results from "../Components/Results";

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
    console.log("set user choic in the click");
    compChooses(game.length);
    // getResults(userChoice, compChoice.name);
    // console.log("are we gertting results?", result);
  };

  // //will only run after userClick
  // useEffect(() => {
  //   compChooses(game.length);
  //   console.log("run the compCHoice UseEffect", compChoice);
  // }, [userChoice]);

  //will only run after comChooses
  useEffect(() => {
    getResults(userChoice, compChoice.name);
    console.log("run the results UseEffect", result.reason);
  }, [userChoice, compChoice.name]);


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
      //winners
      case "RockScissors":
        setResult({ type: 'winner', reason: `Rock smashes Scissors` });
        break;
      case "ScissorsPaper":
        setResult({ type: 'winner', reason: `Scissors cut Paper` });
        break;
      case "PaperRock":
        setResult({ type: 'winner', reason: `Paper covers Rock` });
        break;
      // console.log("results switch case run", result);
      //loosers
      case "RockPaper":
        setResult({ type: 'looser', reason: `Paper covers Rock` });
        break;
      case "ScissorsRock":
        setResult({ type: 'looser', reason: `Rock smashes Scissors` });
        break;
      case "PaperScissors":
        setResult({ type: 'looser', reason: `Scissors cut Paper` });
        break;
      // setResult('looser');
      // console.log("results switch case run", result);

      //ties
      case "RockRock":
      case "ScissorsScissors":
      case "PaperPaper":
        setResults({ type: 'tie', reason: 'Its a Tie' });
        break;

      default:
        setResult('');
        break;

      //lowercase winner/looser/tie
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