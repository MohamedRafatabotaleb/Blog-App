// authors, titles, and texts data
const authors = ["Mohamed", "Ahmed", "Ali", "Mahdi", "Kareem"];

const titles = ["Design", "Technology", "Art", "Science", "Culture"];

const texts = [
  [
    "Design blends form and function seamlessly, creating harmony and clarity.",
    "It creates visual harmony and clarity, enhancing the user experience.",
    "Design influences how we experience the world, shaping our perceptions.",
  ],
  [
    "Technology revolutionizes our daily routines, making life more convenient.",
    "It opens new frontiers in communication, connecting people worldwide instantly.",
    "Innovation in technology shapes future possibilities, transforming entire industries.",
  ],
  [
    "Art is the language of human emotions, expressing feelings universally.",
    "It connects us through shared experiences, fostering empathy and understanding.",
    "Art fosters creativity and cultural exchange, enriching diverse global communities.",
  ],
  [
    "Science uncovers the mysteries of nature, expanding our understanding greatly.",
    "It seeks solutions to improve humanity’s future through innovative discoveries.",
    "Scientific discoveries shape our understanding of the world, driving progress.",
  ],
  [
    "Culture preserves traditions and shared values, passing them through generations.",
    "It unites communities through collective identity, building stronger connections worldwide.",
    "Culture evolves, reflecting societal changes over time, adapting to new realities.",
  ],
];

const dates = [
  "17 Nov 2022",
  "20 Oct 2021",
  "12 Aug 2020",
  "19 May 2022",
  "22 Dec 2019",
];

// Function to get random author, title, and text
const getRandomData = (selectedTexts = {}) => {
  const author = authors[Math.floor(Math.random() * authors.length)];

  const date = dates[Math.floor(Math.random() * dates.length)];

  // Select a random title
  const title = titles[Math.floor(Math.random() * titles.length)];

  // Find the index of the selected title
  const titleIndex = titles.indexOf(title);

  // Create an array of the text options for the selected title
  const textOptions = texts[titleIndex];

  // If the title has not been selected before, pick a random sentence from its options
  let text;
  if (!selectedTexts[title]) {
    // If the title has not been selected before, randomly select a sentence
    text = textOptions[Math.floor(Math.random() * textOptions.length)];
    selectedTexts[title] = text; // Store the selected sentence for this title
  } else {
    // If the title was selected previously, pick a different sentence
    const availableTexts = textOptions.filter(
      (t) => t !== selectedTexts[title],
    );
    text = availableTexts[Math.floor(Math.random() * availableTexts.length)];
    selectedTexts[title] = text; // Update the selected sentence for this title
  }

  return { author, title, text, date };
};

export default getRandomData;
