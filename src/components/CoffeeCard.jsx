import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
  // navigate show all page

  const navigate = useNavigate();

  // category and data
  const { category } = useParams();
  const data = useLoaderData();

  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredCoffee = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffee(filteredCoffee);
    } else {
      setCoffee(data.slice(0, 6));
    }
  }, [category, data]);

  return (
    <div>
      {/* <h2> {category}</h2> */}

      <section className="grid grid-cols-3 gap-6">
        {coffee.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </section>

      <div className="text-center my-6">
        <button onClick={() => navigate('/coffees')} className="btn btn-primary font-semibold ">Show All</button>
      </div>
    </div>
  );
};

export default CoffeeCard;
