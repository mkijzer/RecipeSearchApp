export const RecipeItem = ({
  label,
  image,
  dishType,
  dietLabels,
  cautions,
  onClick,
}) => (
  <div onClick={onClick} style={{ cursor: "pointer" }}>
    {" "}
    <img src={image} style={{ width: "200px", height: "200px" }} />
    <div>
      <p>{dishType}</p>
      <h2>{label}</h2>
      <p>{dietLabels}</p>
      <p>Cautions: {cautions}</p>
    </div>
  </div>
);
