import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./App.css";
import Card from "./components/Card";
import Loading from "./components/Loading";

function App() {
  const [toggleLogo, setToggleLogo] = useState(true);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([
    { id: 0, animation: "card" },
    { id: 1, animation: "card" },
    { id: 2, animation: "card" },
    { id: 3, animation: "card" },
    { id: 4, animation: "card" },
    { id: 5, animation: "card" }
  ]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const onToggleLogo = () => {
    setToggleLogo(!toggleLogo);
  };

  const clickCard = card => {
    let tmpCards = [...cards];
    // console.log(tmpCards[card.id].animation);
    tmpCards[card.id].animation = "card animated zoomOut";
    console.log(tmpCards);
    setCards(tmpCards);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={toggleLogo ? "static-logo" : "static-logo animated jello"}
          alt="logo"
          onMouseEnter={() => onToggleLogo()}
          onMouseLeave={() => onToggleLogo()}
        />
        <h1>Welcome to React</h1>
        <button onClick={onToggleLogo}>Click Me</button>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div className="Grid">
          {cards.map(card => (
            <Card
              duration={150}
              key={card.id}
              card={card}
              clickCard={clickCard}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
