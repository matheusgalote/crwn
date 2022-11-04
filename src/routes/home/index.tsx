import { Outlet } from "react-router-dom";
import Category from "../../components/category-bk";

const Home = () => {
  return (
    <div>
      <Category />
      <Outlet />
    </div>
  );
};

export default Home;
