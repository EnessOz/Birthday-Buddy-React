import data from "./data.js";
import { useState } from "react";
import "./App.css"

const App = () => {
  const [getData, setGetData] = useState(data);
  const [showButtons, setShowButtons] = useState(true);

  function removeButton() {
    setGetData([]);
    setShowButtons(true);
  }

  function getButton() {
    setGetData(data);
    setShowButtons(false);
  }

  return (
    <div className="Container">
      <div className="PersonList">{`${getData.length} Birthdays Today`}</div>
      {getData.map(item => (
        <div className="Inside">
          <img className="images" src={item.image} alt=""></img>
          <div className="Texts">
            <div className="Name" key={item.id + "-name"}>{item.name}</div>
            <div key={item.id + "-age"}>{item.age} Years</div>
          </div>
        </div>
      ))}
      <div>
        <button onClick={removeButton}>Clear All</button>
        {showButtons && (
          <div>
            <button onClick={getButton}>Get Informations</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
