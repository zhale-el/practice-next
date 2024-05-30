import SwrComponent from "../components/componentSwr";
import Cart from "../components/cart";
import AddButton from "../components/addButton";
const Home = () => {
  return (
    <div>
      <h1 className="text-3xl m-4"> Home page</h1>
      <div>
        <SwrComponent />
      </div>
      <div className="text-center">
        <Cart />
        <AddButton />
      </div>
    </div>
  );
};

export default Home;
