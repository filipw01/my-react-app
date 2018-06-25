import React from "react";

class OpponentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      ad: this.props.ad,
      hp: this.props.hp
    };
  }

  handleAttack = () => {
    this.props.handler(this.state.name, this.state.ad, this.state.hp);
  };

  changeStats = () => {
    if (this.props.nextAttack) {
      let hp = this.state.hp;
      for (let value of this.props.nextAttack) {
        if (value[0] === this.state.name) {
          hp -= value[2][1];
        }
        if (value[1] === this.state.name) {
          hp -= value[2][0];
        }
      }
      this.setState({
        hp: hp
      });
    }
  };

  componentDidUpdate() {
    if (this.props.endTurn) {
      this.changeStats();
    }
  }

  render() {
    if (this.state.hp <= 0) {
      return (
        <div
          className="card"
          style={{
            backgroundColor: "gray",
            width: 0,
            opacity: 0,
            transition:
              "width 2s, opacity 0.5s, background-color 0.1s linear"
          }}
        >
          <p>{this.state.name}</p>
          <p>AD {this.state.ad}</p>
          <p>HP {this.state.hp}</p>
        </div>
      );
    }
    return (
      <div
        className="card"
        onClick={this.handleAttack}
        style={{backgroundColor: "blue"}}
      >
        <p>{this.state.name}</p>
        <p>AD {this.state.ad}</p>
        <p>HP {this.state.hp}</p>
      </div>
    );
  }
}

export default OpponentCard;
