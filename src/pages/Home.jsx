import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const count = 10; // Number of cards to be created

// Function to generate random data
const generateRandomCards = (count) => {
  const titles = ["Design", "Technology", "Art", "Science", "Culture"];
  const authors = ["Mohamed", "Ahmed", "Sara", "Laila", "Kareem"];
  const texts = [
    "Lorem Ipsum is simply dummy text",
    "Contrary to popular belief, Lorem Ipsum is not random",
    "It has roots in classical literature",
    "Richard McClintock discovered its origins",
    "A fascinating piece of design history",
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: titles[Math.floor(Math.random() * titles.length)],
    author: authors[Math.floor(Math.random() * authors.length)],
    text: texts[Math.floor(Math.random() * texts.length)],
  }));
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store search term
  const cardsData = generateRandomCards(count);

  // Filter cards based on search term
  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Event listener to handle the custom search event
    const handleSearchEvent = (event) => {
      setSearchTerm(event.detail); // Update the search term
    };

    // Attach event listener
    window.addEventListener("searchEvent", handleSearchEvent);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("searchEvent", handleSearchEvent);
    };
  }, []);

  return (
    <div className="mx-auto mt-12 grid max-w-[1216px] items-center justify-center gap-[20px] ov-800:grid-cols-[repeat(2,minmax(0,_auto))] ov-1200:grid-cols-[repeat(3,minmax(0,_auto))]">
      {filteredCards.map((card) => (
        <Link
          key={card.id}
          to={card.title}
          state={{ author: card.author }}
          className="w-full"
        >
          <Card title={card.title} author={card.author} text={card.text} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
