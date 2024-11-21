const Card = ({ title, text, author }) => {
  return (
    <div className="h-[488px] w-[392px] rounded-[12px] border border-custom-gray bg-white p-[16px] shadow-md">
      <img
        className="h-[240px] rounded-md"
        src="https://placehold.jp/360x240.png"
        alt="placeholder"
        loading="lazy"
      />
      <div className="mt-[16px] h-[200px] rounded-md p-2">
        {/* title */}
        <div className="inline-flex h-[28px] w-auto items-center justify-center rounded-[6px] bg-bright-blue/15 p-[4px_10px_4px_10px] text-heading-s text-bright-blue">
          {title}
        </div>

        {/* Text shortcut */}
        <div className="mt-4 line-clamp-3 text-body-l leading-[28px]">
          {text}
        </div>

        {/* Author */}
        <div className="flex items-center pt-5">
          <img
            className="h-[36px] w-[36px] rounded-full"
            src="https://placehold.co/36"
            alt="Photo Author"
          />

          <p className="pl-3 text-heading-l text-soft-gray">{author}</p>

          <p className="pl-5 text-heading-header text-soft-gray">
            Nov 17, 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
