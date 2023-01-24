import React from "react";

class Info extends React.Component {
  render() {
    const title = "Inventory System";
    const showTitle = true;

    return (
      <div>
        <h1>{showTitle ? title : "Title Deactivated"}</h1>
        <p>Manage your stuff.</p>
      </div>
    );
  }
}

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
