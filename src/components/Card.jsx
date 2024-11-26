import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getRandomData from "./CardData"; // Import the function from data.js

// Import images from the two directories
const mainPhotos = import.meta.glob(
  "/src/assets/MainPhoto/*.{png,jpg,jpeg,gif}",
);
const authorPhotos = import.meta.glob(
  "/src/assets/AuthorPhoto/*.{png,jpg,jpeg,gif}",
);

const Card = () => {
  const [randomMainPhoto, setRandomMainPhoto] = useState(""); // State for the main photo
  const [authorPhoto, setAuthorPhoto] = useState(""); // State for the author photo

  // Use getRandomData to get the random author, title, and text
  const { author, title, text, date } = getRandomData();

  useEffect(() => {
    // Get all paths for main photos
    const mainPhotoPaths = Object.keys(mainPhotos);
    // Select a random path from the main photo paths
    const randomMain =
      mainPhotoPaths[Math.floor(Math.random() * mainPhotoPaths.length)];
    setRandomMainPhoto(randomMain);

    // Dynamically import the author's photo based on the author's name
    const authorPhotoPath =
      authorPhotos[`/src/assets/AuthorPhoto/${author}.jpg`] ||
      authorPhotos[`/src/assets/AuthorPhoto/${author}.png`] ||
      authorPhotos[`/src/assets/AuthorPhoto/${author}.jpeg`];

    // If the author photo exists, import it
    if (authorPhotoPath) {
      authorPhotoPath().then((module) => {
        setAuthorPhoto(module.default); // Set the imported image path
      });
    }
  }, [author]);

  return (
    <div className="h-[488px] w-[392px] rounded-[12px] border border-custom-gray bg-white p-[16px] shadow-md">
      {/* Link with the title dynamically */}
      <Link
        to={`/${encodeURIComponent(title)}`}
        state={{
          articleAuthorName: author,
          articleTitleText: text,
          articleTitle: title,
          articleDate: date,
          articleAuthorPhoto: authorPhoto, // Pass the imported photo
          articleMainPhoto: randomMainPhoto, // Pass the main photo
        }}
        className="w-full"
      >
        {/* Render the main photo */}
        <img
          className="h-[240px] rounded-md"
          src={randomMainPhoto}
          alt="Random Main"
          loading="lazy"
        />
        <div className="mt-[16px] h-[200px] rounded-md p-2">
          {/* Card title */}
          <div className="inline-flex h-[28px] w-auto items-center justify-center rounded-[6px] bg-bright-blue/15 p-[4px_10px_4px_10px] text-heading-s text-bright-blue">
            {title}
          </div>

          {/* Card text content */}
          <div className="mt-4 line-clamp-3 text-body-l leading-[28px]">
            {text}
          </div>

          {/* Author section */}
          <div className="flex items-center pt-5">
            {/* Render the author photo */}
            {authorPhoto && (
              <img
                className="h-[36px] w-[36px] rounded-full"
                src={authorPhoto}
                alt="Author Photo"
              />
            )}

            {/* Author name */}
            <p className="pl-3 text-heading-l text-soft-gray">{author}</p>

            {/* Static date */}
            <p className="pl-5 text-heading-header text-soft-gray">{date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
