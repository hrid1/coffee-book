const Heading = ({ title, subtilte }) => {
  return (
    <div className="text-center mx-auto space-y-4 my-12">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-thin">{title}</h1>
      <p className="text-sm md:text-base text-gray-600 font-thin">{subtilte}</p>
    </div>
  );
};

export default Heading;
