import React from "react";

class OpponentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      ad: this.props.ad,
      hp: this.props.hp,
      ID: this.props.id
    };
  }

  handleAttack = () => {
    this.props.handler(
      this.state.ID
    );
  };

  render() {
    return (
      <div
        className="card"
        onClick={this.handleAttack}
        style={{backgroundColor: "blue"}}
      >
        <p>NAME: {this.state.name}</p>
        <p>AD {this.state.ad}</p>
        <p>HP {this.state.hp}</p>
      </div>
    );
  }
}

export default OpponentCard;