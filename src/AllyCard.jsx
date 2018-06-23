import React from "react";

class AllyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      ad: this.props.ad,
      hp: this.props.hp
    };
  }

  handleClick = () => {
    this.props.handler(this.state.name, this.state.ad, this.state.hp);
  };

  changeStats = () => {
    if (this.props.nextAttack) {
      for (let value of this.props.nextAttack) {
        if (value[0] === this.state.name) {
          this.setState({
            hp: value[3][0] - value[2][1]
          });
        }
        if (value[1] === this.state.name) {
          this.setState({
            hp: value[3][1] - value[2][0]
          });
        }
      }
    }
  };

  componentDidUpdate() {
    if (this.props.endTurn) {
      this.changeStats();
    }
  }


  render() {
    if (this.state.name === this.props.attackerName) {
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

export default AllyCard;
