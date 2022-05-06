import React, { Component, useEffect } from 'react';
import './App.css';
import { useState } from "react";

class App extends Component {
  render() {
    return (
      <div className="App, match-quiz">
        <header>
            <h1>Match the words to the numbers</h1>
            <h3>Click the word and then the number. Match all the pairs to continue.</h3>
          <Match />
        </header>
      </div>
    );
  }
}

function Match(){
  const [stylenum, setnumStyle] = useState("li");
  const [styleword, setwordStyle] = useState("li");
  const [correct, setcorrectStyle] = useState("response");

  // create an array of button list
  const firstChoice = ['Two', 'Six','Four','One','Three'];

  // function ToggleGroup(){
  //   const [active, setActive] = useState(firstChoice[0], "matched");
  //   return <div>
  //     {firstChoice.map(type => (
  //       <li
  //         active = {active === type}
  //         onClick = { TwoButtonClicked }
  //       >
  //         {type}
  //       </li>
  //     ))
  //     }
  //   </div>
  // }

  const [word, setwordCount] = useState(0);
  const [number, setnumCount] = useState(0);

  // buttonClicked
  const TwoButtonClicked = () => {
    // change the state of the button
    if(word === 0){
      setwordCount(1);
      setnumStyle("matched");
    }else{
      setwordCount(0);
      setnumStyle("li");
    }
  }

  // buttonClicked
  const TwoNumberClicked = () => {
    // change the state of the button
    if(number === 0){
      setnumCount(1);
      setwordStyle("matched");
      
    }else{
      setnumCount(0);
      setwordStyle("li");
    } 

  }

  // check if the clicked ones match
  useEffect(() => {    
      // check correct
      if(word === number && word === 1){
        setcorrectStyle("response2");
      }
  }, [word, number])

  return(
    <div>
      <ul class="wordslist1">
          <li className={stylenum} onClick={ TwoButtonClicked } >Two</li>
          <li >Six</li>
          <li>Four</li>
          <li>One</li>
          <li>Three</li>
        </ul>
        
        <ul class="wordslist2">
          <li>3</li>
          <li>4</li>
          <li className={styleword} onClick={ TwoNumberClicked }>2</li>
          <li>5</li>
          <li>1</li>
        </ul>
        <div className={ correct }>Correct</div>
        {/* <ToggleGroup/> */}
    </div>
  );
}


export default App;
