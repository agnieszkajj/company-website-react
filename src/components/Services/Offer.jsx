const Offer = ({ offer }) => {
  return (
    <div className="bg-white h-[150px] w-[150px] flex justify-center items-center flex-col relative">
      <h1>{offer.name}</h1>
      {offer.isNew && (
        <div className="w-[25px] h-[25px] bg-red-600 rounded-full absolute top-[-10px] left-[-10px]"></div>
      )}
      {offer.isNew && <p>(new)</p>}
    </div>
  );
};

export default Offer;
