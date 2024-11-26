import React, { useState, useEffect } from "react";

// Import images from the two directories
const mainPhotos = import.meta.glob(
  "/src/assets/MainPhoto/*.{png,jpg,jpeg,gif}",
);
const authorPhotos = import.meta.glob(
  "/src/assets/AuthorPhoto/*.{png,jpg,jpeg,gif}",
);

const Card = ({ title, text, author }) => {
  const [randomMainPhoto, setRandomMainPhoto] = useState(""); // State for the random main photo
  const [randomAuthorPhoto, setRandomAuthorPhoto] = useState(""); // State for the random author photo

  useEffect(() => {
    // Get all paths for main photos
    const mainPhotoPaths = Object.keys(mainPhotos);
    // Select a random path from the main photo paths
    const randomMain =
      mainPhotoPaths[Math.floor(Math.random() * mainPhotoPaths.length)];
    setRandomMainPhoto(randomMain);

    // Get all paths for author photos
    const authorPhotoPaths = Object.keys(authorPhotos);
    // Select a random path from the author photo paths
    const randomAuthor =
      authorPhotoPaths[Math.floor(Math.random() * authorPhotoPaths.length)];
    setRandomAuthorPhoto(randomAuthor);
  }, []);

  return (
    <div className="h-[488px] w-[392px] rounded-[12px] border border-custom-gray bg-white p-[16px] shadow-md">
      {/* Render the random main photo */}
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
          {/* Render the random author photo */}
          <img
            className="h-[36px] w-[36px] rounded-full"
            src={randomAuthorPhoto}
            alt="Author Photo"
          />

          {/* Author name */}
          <p className="pl-3 text-heading-l text-soft-gray">{author}</p>

          {/* Static date */}
          <p className="pl-5 text-heading-header text-soft-gray">
            Nov 17, 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
