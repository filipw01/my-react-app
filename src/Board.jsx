import React from "react";
import Card from "./Card";


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attacker: null,
      ad: null,
      hp: null,
      attackerID: null
    };
  }

  updateAttacker = (name, ad, hp, ID) => {
    this.setState({
      attacker: name,
      ad: ad,
      hp: hp,
      attackerID: ID
    });
  };

  handleOutsideClick = () => {
    this.setState({
      attackerID: null
    });
  };

  render() {
    if (this.state.attackerID) {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    }
    return (
      <div>
        <h3>Attacker is {this.state.attacker}</h3>
        <h3>AD is {this.state.ad}</h3>
        <h3>HP is {this.state.hp}</h3>
        <div align="center" className="wsector">
          <Card
            name="ork"
            id="a1"
            ad="6"
            hp="2"
            attackerID={this.state.attackerID}
            handler={this.updateAttacker}
          />
          <Card
            name="ogr"
            id="a2"
            ad="1"
            hp="7"
            attackerID={this.state.attackerID}
            handler={this.updateAttacker}
          />
          <Card
            name="nimfa"
            id="a3"
            ad="2"
            hp="5"
            attackerID={this.state.attackerID}
            handler={this.updateAttacker}
          />
        </div>
        <div align="center" className="bsector">
          <Card
            name="krasnolud"
            id="b1"
            ad="5"
            hp="3"
            attackerID={this.state.attackerID}
            handler={this.updateAttacker}
          />
          <Card
            name="goblin"
            id="b2"
            ad="4"
            hp="4"
            attackerID={this.state.attackerID}
            handler={this.updateAttacker}
          />
          <Card
            name="gnom"
            id="b3"
            ad="3"
            hp="5"
            attackerID={this.state.attackerID}
            handler={this.updateAttacker}
          />
        </div>
      </div>
    );
  }
}

export default Board;
