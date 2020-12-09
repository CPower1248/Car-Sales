import React from 'react';
import { connect } from "react-redux"
import { total } from "../actions"

const Total = props => {
  const getTotal = () => {
    let total = 0;
    props.car.features.forEach(item => {
      total += item.price
    })
    return total
  }

  let realTotal = getTotal()

  props.total(realTotal)
  
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { total })(Total);
