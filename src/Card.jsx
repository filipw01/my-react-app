import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      ad: this.props.ad,
      hp: this.props.hp,
      ID: this.props.id
    };
  }

  handleClick = () => {
    this.props.handler(
      this.state.name,
      this.state.ad,
      this.state.hp,
      this.state.ID
    );
  };

  render() {
    if (this.state.ID == this.props.attackerID) {
      return (
        <div
          className="card"
          onClick={this.handleClick}
          style={{backgroundColor: "red"}}
        >
          <p>NAME: {this.state.name}</p>
          <p>AD {this.state.ad}</p>
          <p>HP {this.state.hp}</p>
        </div>
      );
    } else {
      return (
        <div
          className="card"
          onClick={this.handleClick}
          style={{backgroundColor: "blue"}}
        >
          <p>NAME: {this.state.name}</p>
          <p>AD {this.state.ad}</p>
          <p>HP {this.state.hp}</p>
        </div>
      );
    }
  }
}

export default Card;
