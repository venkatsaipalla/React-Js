const Box = (props) => {
  //  Write your code here.
  const { name } = props;
  return (
    <div className={`${name}`}>
      <p>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg_container">
    <h1 className="box_heading">Boxes</h1>
    <div className="box_container">
      <Box name="Small" />
      <Box name="Medium" />
      <Box name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
