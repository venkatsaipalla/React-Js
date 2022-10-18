import "./index.css";
const Notification = (props) => {
  //  Write your code here.
  const { name, css, path } = props;
  return (
    <div className={"note"`${css}`}>
      <img className="icon" src={`${path}`} />
      <p className="text">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="background_container">
    <h1 className="notification">Notifications</h1>
    <Notification
      name="Information Message"
      css="information"
      path="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      name="Success Message"
      css="success"
      path="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      name="Warning Message"
      css="warning"
      path="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      name="Error Message"
      css="error"
      path="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
