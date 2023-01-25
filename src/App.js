import "./App.css";
import { PropTypes } from "prop-types";
import Info from "./Info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="Tim" number={2} />
      <AddItem />
      <AddItem />
    </div>
  );
}

function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}

AddItem.defaultProps = {
  text: "default",
  number: 1,
};

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

export default App;
