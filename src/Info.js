import React from "react";
import { PropTypes } from "prop-types";

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const title = this.props.title;
    const showTitle = true;

    return (
      <div>
        <h1>{showTitle ? title : "Title Deactivated"}</h1>
        <p>Manage your stuff.</p>
      </div>
    );
  }
}

Info.defaultProps = {
  title: "Default Title",
};

Info.propTypes = {
  title: PropTypes.string,
};

// function Info() {
//   const title = "Inventory System";
//   const showTitle = true;

//   return (
//     <div>
//       <h1>{showTitle ? title : "Title Deactivated"}</h1>
//       <p>Manage your stuff.</p>
//     </div>
//   );
// }

export default Info;
