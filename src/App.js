import React, {useState} from "react";
import {buildCards} from "./buildCards";
import styled from "styled-components";

function App() {
  const [cards, setCards] = useState(buildCards());

  const RenderCard = (card) => {
    const {frontImg, backImg, flipped} = card;
    const img = flipped ? frontImg : backImg;

    return (
      <Card className="Card">
        <img src={img} alt="" />
      </Card>
    );
  };

  let i = 0;
  return (
    <div className="App">
      <Board className="Board w-11/12 sm:w-2/3 md:w-1/2">{cards.map(RenderCard)}</Board>
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
const Card = styled.div`
  img {
    width: 150px;
    margin: 0 auto;
    border-bottom: none;
    border-top: none;
    padding: 1rem;
  }
`;

