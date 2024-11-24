import Card from "./Card";
import Header from "./Header/Header";
import React from "react";
import { Link } from "react-router-dom";

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

const Layout = () => {
  const cardsData = generateRandomCards(count);

  return (
    <div className="">
      <Header />
      <div className="mx-auto mt-12 grid max-w-[1216px] items-center justify-center gap-[20px] ov-800:grid-cols-[repeat(2,minmax(0,_auto))] ov-1200:grid-cols-[repeat(3,minmax(0,_auto))]">
        {cardsData.map((card) => (
          <Link key={card.id} to="/SubPage" className="w-full">
            <Card title={card.title} author={card.author} text={card.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Layout;
