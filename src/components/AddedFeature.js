import React from 'react';
import { connect } from "react-redux"
import { removeFeat } from "../actions" 

const AddedFeature = props => {
  const handleRemove = () => {
    props.removeFeat(props.feature.id)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemove} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeat })(AddedFeature);
