import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./App.css";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import data from "./data/data";

function App() {
  const [toggleLogo, setToggleLogo] = useState(true);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    setCards(data);
  }, [cards]);

  const onToggleLogo = () => {
    setToggleLogo(!toggleLogo);
  };

  const showFront = card => {
    let tmpCards = [...cards];
    tmpCards[card.id].animation = "card";
    setCards(tmpCards);
  };

  const showBack = card => {
    let tmpCards = [...cards];
    tmpCards[card.id].animation = "card card-flip";
    setCards(tmpCards);
  };

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
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
          onClick={openNav}
        />
        <h1
          className={toggleLogo ? "menu-hidden" : "menu animated bounceInDown"}
          onClick={openNav}
        >
          Menu
        </h1>
        <Navigation closeNav={closeNav} />
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div className="Grid animated bounceInUp">
          {cards.map(card => (
            <Card
              duration={150}
              key={card.id}
              card={card}
              showFront={showFront}
              showBack={showBack}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
