const Button = (props) => {
  //  Write your code here.
  const { name } = props;
  return <button className={`${name}`}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="background_container">
    <h1 className="social_button_heading">Social Button</h1>
    <div className="Button_container">
      <Button name="Like" />
      <Button name="Comment" />
      <Button name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
