const Card = () => {
  return (
    <div className="bg-red h-[488px] max-w-[392px] rounded-[12px] p-[16px] shadow-md dark:bg-gray-800">
      <img
        className="h-[240px] w-[360px] rounded-md"
        src="https://placehold.jp/360x240.png"
        alt="placeholder"
        loading="lazy"
      />
      <div className="text-bright-blue bg-black">Technology</div>
    </div>
  );
};

export default Card;
