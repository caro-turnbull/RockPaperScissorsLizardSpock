import React, { createContext, useContext, useEffect, useState } from "react";
import { options3, options5 } from "../data";
import Results from "../Components/Results";

export const DataContext = createContext();

export default function DataProvider(props) {

  //states
  const [compChoice, setCompChoice] = useState('None');
  const [userChoice, setUserChoice] = useState('Rock');
  const [game, setGame] = useState(options3);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState('');

  function chooseGame(number) {
    setGame(number === 5 ? options5 : options3);
    // setGame(`options${number}`);
    console.log("setting game to", number, game);
    console.log("whats this game look like", game);
  }

  const userClick = (name) => {
    // console.log("loading?", loading)
    // setLoading(true);
    // console.log("loading true", loading)
    // setTimeout(() => {
    //   setLoading(false);
      // console.log("loading false", loading)
      setUserChoice(name);
      console.log("set user choic in the click");
      compChooses(game.length);
    // }, 1200); 
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


  const compChooses = (max) => {
    let randomIndex = Math.floor(Math.random() * max);
    console.log("comp pick", game[randomIndex].name);
    setCompChoice(game[randomIndex]);
    //sets compChoice state to the entire object 
  };


  //why is this function declaration different?
  const getResults = (userChoice, compChoice) => {
    console.log("are we getting the states?", userChoice, compChoice);
    console.log("CASE", userChoice + compChoice)
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
      case"LizardPaper":
        setResult({ type: 'winner', reason: "Lizard eats Paper"});
        break;
      case "ScissorsLizard":
        setResult({ type: 'winner', reason: `Scissors decapitates Lizard`});
        break;
      case "RockLizard":
        setResult({ type: 'winner', reason: `Rock smashes Lizard`});
        break;
      case "LizardSpock":
        setResult({ type: 'winner', reason: `Lizard poisons Spock`});
        break;
      case "SpockPaper":
        setResult({ type: 'winner', reason: `Paper disproves Spock`});
        break;
      case "SpockRock":
        setResult({ type: 'winner', reason: `Spock vaporizes Rock`});
        break;
      case "SpockScissors":
        setResult({ type: 'winner', reason: `Spock smashes Scissors`});
        break;


      //loosers
      case "RockPaper":
        setResult({ type: 'loser', reason: `Paper covers Rock` });
        break;
      case "ScissorsRock":
        setResult({ type: 'loser', reason: `Rock smashes Scissors` });
        break;
      case "PaperScissors":
        setResult({ type: 'loser', reason: `Scissors cut Paper` });
        break;
      case "PaperSpock":
        setResult({ type: 'loser', reason: `Paper disproves Spock`});
        break;
      case "LizardScissors":
        setResult({ type: 'loser', reason: `Scissors decapitates Lizard`});
        break;
      case"PaperLizard":
        setResult({ type: 'loser', reason: `Lizard eats Paper`});
        break;
      case "LizardRock":
        setResult({ type: 'loser', reason: `Rock smashes Lizard`});
        break;
      case "SpockLizard":
        setResult({ type: 'loser', reason: `Lizard poisons Spock`});
        break;
      case "RockSpock":
        setResult({ type: 'loser', reason: `Spock vaporizes Rock`});
        break;
      case "ScissorsSpock":
        setResult({ type: 'loser', reason: `Spock smashes Scissors`});
        break;

      //ties
      case "RockRock":
      case "ScissorsScissors":
      case "PaperPaper":
      case "LizardLizard":
      case "SpockSpock":
        setResult({ type: 'tie', reason: 'Its a Tie' });
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