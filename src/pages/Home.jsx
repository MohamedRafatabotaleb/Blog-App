import React from "react";
import Card from "../components/Card";

const count = 10; // Number of cards to be created

// Function to generate cards
const generateCards = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
  }));
};

const Home = () => {
  const cardsData = generateCards(count);

  return (
    <div className="mx-auto mt-12 grid max-w-[1216px] items-center justify-center gap-[20px] ov-800:grid-cols-[repeat(2,minmax(0,_auto))] ov-1200:grid-cols-[repeat(3,minmax(0,_auto))]">
      {cardsData.map((card) => (
        <Card key={card.id} cardId={card.id} />
      ))}
    </div>
  );
};

export default Home;
