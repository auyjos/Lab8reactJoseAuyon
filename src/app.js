import React, { useEffect, useState } from "react";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import "./app.css";
import "./components/card/card.js";
import Card from "./components/card/card.js";
import MyDialog from "./components/dialog/dialog";

const cardImages = [
  {
    name: "Guts",
    src: "https://i.pinimg.com/originals/e0/c3/01/e0c3015aa713e224da98e04500f69ab9.png",
    matched: false,
  },
  {
    name: "Casca",
    src: "https://w7.pngwing.com/pngs/319/430/png-transparent-casca-guts-griffith-berserk-drawing-manga-manga-monochrome-human-thumbnail.png",
    matched: false,
  },
  {
    name: "Griffith",
    src: "https://i.pinimg.com/736x/35/03/f8/3503f825c42ed0c2d57ff3a49b18cea2.jpg",
    matched: false,
  },
  {
    name: "Guts-Sword",
    src: "https://e7.pngegg.com/pngimages/972/270/png-clipart-sword-of-the-berserk-guts-rage-dragonslayer-berserker-guts-griffith.png",
    matched: false,
  },
  {
    name: "Berserker",
    src: "https://www.nicepng.com/png/detail/160-1605986_guts-berserk-armor.png",
    matched: false,
  },
  {
    name: "Puck",
    src: "https://preview.redd.it/kkp5bxip02px.png?auto=webp&s=c230394d042c03d8a52dc0c519c141a98b64bcfa",
    matched: false,
  },
  {
    name: "Zodd",
    src: "https://i.pinimg.com/originals/6b/a3/68/6ba368c0d3d933a17347a931c10e583b.png",
    matched: false,
  },
  {
    name: "Berserker",
    src: "https://www.pngkit.com/png/detail/160-1605056_skull-knight-berserk.png",
    matched: false,
  },
];

export default function App() {
  const [cartas, setCards] = useState([]);
  const [turnos, setTurns] = useState(0);
  const [eleccion1, seteleccion1] = useState(null);
  const [eleccion2, seteleccion2] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const shuffleCartas = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    seteleccion1(null);
    seteleccion2(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle de la eleccion
  const handleEleccion = (card) => {
    console.log(card);
    eleccion1 ? seteleccion2(card) : seteleccion1(card);
  };

  // comparar 2 cartas
  useEffect(() => {
    if (eleccion1 && eleccion2) {
      setDisabled(true);
      if (eleccion1.src == eleccion2.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === eleccion1.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurno();
      } else {
        console.log("Esas cartas no son iguales");
        setTimeout(() => resetTurno(), 1000);
      }
    }
  }, [eleccion1, eleccion2]);

  console.log(cartas);

  //reiniciar elecciones e incrementar el turno
  const resetTurno = () => {
    seteleccion1(null);
    seteleccion2(null);
    setTurns((prevTurno) => prevTurno + 1);
    setDisabled(false);
  };

  const checkCartas = (cartas) =>{
    return cartas.reduce(
      (accumulator, currentValue) => accumulator &&currentValue.matched,
      true
    );
  }
  //empezar el juego de manera automática
  useEffect(() => {
    shuffleCartas();
   
  }, []);

 
   useEffect(() => {
    console.log(cartas, 'Use effect',checkCartas(cartas))
    if (checkCartas(cartas) == true){
       setIsOpen(true)
     }
     else{
       setIsOpen(false)
     }
  }, [cartas]);
  

  return (
    <div className="App">
      <img
        className="berserkimg"
        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Berserk_anime_logo.png"
      ></img>
      <h1>Berserk Match</h1>
      <button onClick={shuffleCartas}>Jugar</button>
      <div className="card-grid">
        {cartas.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleEleccion={handleEleccion}
            flipped={card === eleccion1 || card === eleccion2 || card.matched}
            disabled={disabled}
          ></Card>
        ))}
        <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} turnos={turnos} ></MyDialog>
      </div>
      <h2> Turnos : {turnos} </h2>
    </div>
  );
}
