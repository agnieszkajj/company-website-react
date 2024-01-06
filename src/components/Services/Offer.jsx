const Offer = ({ offer }) => {
  return (
    <div className="bg-white h-[150px] w-[150px] flex justify-center items-center flex-col">
      <h1>{offer.name}</h1>
      {offer.isNew && <p>(new)</p>}
    </div>
  );
};

export default Offer;
