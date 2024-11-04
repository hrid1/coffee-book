import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import Heading from "../../components/Heading";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtilte={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>
      {/* categories */}
      <Categories categories={categories} />
      {/* dynamic components based on category */}

      <Outlet></Outlet>
    </div>
  );
};

export default Home;
