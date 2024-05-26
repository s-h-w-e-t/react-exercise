const Traits = ({ traits }) => {
  console.log("traits", traits);
  return (
    <div>
      <ul>
        {traits.map((trait) => {
          return <li key={trait.id}>{trait.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Traits;
