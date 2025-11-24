import eiffelImg from "../images/eiffel.jpg";

function EiffelTower() {
  return (
    <div className="page">
      <h1>Eiffel Tower</h1>
      <img src={eiffelImg} alt="Eiffel Tower" />

      <p>
        The Eiffel Tower was originally meant to be a temporary structure for 
        the 1889 World’s Fair. It was almost taken down — until scientists 
        realized it made an excellent radio transmission tower.
      </p>
    </div>
  );
}

export default EiffelTower;
