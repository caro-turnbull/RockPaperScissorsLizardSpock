// import React, { createContext, useContext, useState } from "react";
// import { DataContext } from '../Providers/dataProvider';

// export const ResultContext = createContext();

// export default function ResultProvider(props) {
//   const [result, setResult] = useState('');
//   const { compChoice, userChoice } = useContext(DataContext);

//   const getResults = (userChoice, compChoice) => {
//     switch (userChoice + compChoice) {
//       case "RockScissors":
//       case "ScissorsPaper":
//       case "PaperRock":
//         setResult('winner');
//         console.log(result);
//         break;
//       //lowercase winner/looser
//     }
//   };

//   const resultData = {
//     result,
//     getResults
//   };

//   return (
//     <ResultContext.Provider value={resultData}>
//       {props.children}
//     </ResultContext.Provider>
//   );
// };