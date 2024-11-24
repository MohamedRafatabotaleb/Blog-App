import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="md:px-0 container mx-auto max-w-[1200px] px-5">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <Link to="/" className="text-dark-gray-blue">
            Home
          </Link>
          <SearchInput />
        </div>
      </div>
    </header>
  );
};

export default Header;
