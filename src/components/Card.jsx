
const Card = ({ coffee }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div className="flex relative">
      <a
        className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden"
        href="/coffee/1"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type} </p>
          <p>Origin: {origin} </p>
          <p>Rating: {rating} </p>
          <p>Popular: {popularity} </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
