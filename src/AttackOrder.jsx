import React from "react";

class AttackOrder extends React.Component {
  constructor(props) {
    super(props);
  }

  getOrderHTML() {
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

  render() {
    return this.getOrderHTML();
  }
}

export default AttackOrder;
