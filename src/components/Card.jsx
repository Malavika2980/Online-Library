const Card = ({ image, title, price, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div className="card">
      <img src={image} alt={title}  onError={(e) => (e.target.src = "/images/no-cover.png")}
        />
      <h3 className="title">{title}</h3>
      <p className="amount">&#8377;{price}</p>
</div>

    </a>
  );
};

export default Card;
