import Logo from "./Logo";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto max-w-[1200px] px-5 md:px-0">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <button className="text-dark-gray-blue">Home</button>
          <SearchInput />
        </div>
      </div>
    </header>
  );
};

export default Header;
