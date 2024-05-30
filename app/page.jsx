import SwrComponent from "../components/componentSwr";
import Cart from "../components/cart";
import AddButton from "../components/addButton";
import ReactFormOne from "../components/form";
const Home = () => {
  return (
    <div className="flex items-center justify-around">
      <div className="ml-4">
        <h1 className="text-3xl"> Home page</h1>

        <SwrComponent />

        <Cart />
        <AddButton />
      </div>
      <div className="w-96">
        <ReactFormOne />
      </div>
    </div>
  );
};

export default Home;
