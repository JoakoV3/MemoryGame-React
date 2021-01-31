import React, { useState, useEffect } from "react";
import { buildCards } from "./buildCards";
import styled from "styled-components";
import CardRender from "./RenderCards";

function App() {
  const [cards, setCards] = useState(buildCards());
  const [checkers, setCheckers] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [firstClick, setfirstClick] = useState(0);

  const onCardClick = (card) => () => {
    if(firstClick === 0) setfirstClick(1);
    //cuando hacemos click verificamos que no este lleno  ni que la carta ya se encuentre en el array
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;
    //si eso no es verdad creamos una constante de un nuevo checker el cual vamos a usar para nuevas funciones 
    //le sumamos lo que tiene a una nueva carta
    const newCheckers = [...checkers, card];
    //lo asignamos al state
    setCheckers(newCheckers);
    //creamos una constante que devuelve el resultado de la verificacion (true, false)
    const cardsInCheckersMatched = validateCheckers(newCheckers);
    //si esto da true le asignamos las cartas que ya estan dadas vuelta correctamente
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type]);
    }
    //si el checker esta lleno lo reseteamos desoues de un segundo para no causar errores 
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000);
    }
    //esto valida que en el checker haya 2 cartas y las dos sean iguales
    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].type === checkers[1].type;
    }
    //cada carta tiene un id diferente, aca verificamos que si se clickea la misma carta no se agruegue al checker
    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id;
    }
    //Verificamos si el checker esta lleno 
    function checkersFull(checkers) {
      return checkers.length === 2;
    }
    //la funcion que ejecutamos para reiniciar los checker despues de 1 segundo
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([]);
      }, time);
    }
  };
  

  /*este metodo se hace para que cuando demos vuelta otra carta, estas se queden dadas vueltas, tenemos que volver a 
    renderizar las cartas en un map 
  */
    useEffect(() => {
      if(firstClick === 0){

      }
      const newCards = cards.map((card) => ({
        ...card,
        flipped:
          checkers.find((c) => c.id === card.id) || completed.includes(card.type),
      }));
      setCards(newCards);
    }, [cards, checkers, completed]);

  return (
    <div className="App">
      <Board className="Board w-11/12 sm:w-2/3 md:w-1/2">
        {cards.map(card => (
          <CardRender {...card} onClick={onCardClick(card)} key={card.id} />
        ))}
      </Board>
    </div>
  );
}
export default App;

const Board = styled.div`
  background-color: #e1e1e1;
  height: 110vh;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0px;
  row-gap: 1rem;
  padding: 1rem;
`;
