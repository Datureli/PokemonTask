import React from "react";
import { useParams } from "react-router-dom";
const User = (props) => {
  const {name} = useParams()
  return (
    <div>
      <h1>Pokemon Details</h1>
      ID: {name}
    </div>
  );
};
export default User;
