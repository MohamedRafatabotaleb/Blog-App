import Card from "./Card";

const Layout = () => {
  return (
    <div className="container mx-auto justify-between md:px-0">
      <div className="mx-auto grid max-w-[1216px] justify-between md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(3,minmax(0,_auto))] lg:gap-[20px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Layout;
