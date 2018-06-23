import React from "react";

class AttackOrder extends React.Component {

  getOrderHTML() {
    if (this.props.order) {
      var order = [];
      for (let value of this.props.order) {
        order.push(
          <h3>
            {value[0]} -> {value[1]}
          </h3>
        );
      }
      return order;
    }
    return null;
  }

  render() {
    return this.getOrderHTML();
  }
}

export default AttackOrder;
