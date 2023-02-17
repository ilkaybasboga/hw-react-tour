import "./Card.scss";

const Card = ({ id, name, desc, img }) => {
  return (
    <div className="card">
      <div className="title">
        <h2>{name}</h2>
      </div>
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <div className="desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
