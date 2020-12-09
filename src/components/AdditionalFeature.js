import React from 'react';
import { connect } from "react-redux"
import { addFeat } from "../actions"

const AdditionalFeature = props => {

  const handleAdd = () => {
    props.addFeat(props.feature.id)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAdd} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeat })(AdditionalFeature);
