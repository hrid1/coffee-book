import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  //   console.log(coffee);
  const [coffee, setCoffee] = useState(data);
  const handleSorting = (sortBy) => {
    //sort by popularity
    if (sortBy === 'popularity') {
      const sorted = [...coffee].sort((a, b) => b.popularity - a.popularity);
      setCoffee(sorted);
    } 
    // sort by rating
    else if (sortBy === 'rating') {
      const sorted = [...coffee].sort((a, b) => b.rating - a.rating);
      setCoffee(sorted);
    }
  };

  return (
    <div>
      <section className="flex justify-between items-center my-6">
        <div>
          <h1 className="text-2xl font-semibold">Sorting Items</h1>
        </div>
        <div className=" space-x-4">
          <button
            onClick={() => handleSorting("popularity")}
            className="btn btn-warning"
          >
            Popularity
          </button>
          <button
            onClick={() => handleSorting("rating")}
            className="btn btn-warning"
          >
            Rating
          </button>
        </div>
      </section>

      {/* all coffees */}
      <section className="grid grid-cols-3 gap-6">
        {coffee.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </section>
    </div>
  );
};

export default Coffees;
