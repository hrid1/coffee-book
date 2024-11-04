import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card";

const Coffees = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  return (
    <div>
      <section className="grid grid-cols-3 gap-6">
        {coffee.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </section>
    </div>
  );
};

export default Coffees;
