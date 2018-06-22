import React from "react";
import OpponentCard from "./OpponentCard";
import AllyCard from "./AllyCard";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attacker: null,
      ad: null,
      hp: null,
      attackerID: null,
      nextAttack: []
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

  bindAttacker = ID => {
    let array = [...this.state.nextAttack];
    if (this.state.attackerID) {
      for (let value of array) {
        if (value[0] === this.state.attackerID) {
          let index = array.indexOf(value);
          this.setState({
            nextAttack: array.splice(index, 1)
          });
        }
      }
      this.setState({
        nextAttack: [...array, [this.state.attackerID, ID]]
      });
      console.log(this.state.nextAttack);
    }
  };

  handleOutsideClick = () => {
    this.setState({
      attacker: null,
      ad: null,
      hp: null,
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
          <OpponentCard
            name="krasnolud"
            id="b1"
            ad="5"
            hp="3"
            attackerID={this.state.attackerID}
            handler={this.bindAttacker}
          />
          <OpponentCard
            name="goblin"
            id="b2"
            ad="4"
            hp="4"
            attackerID={this.state.attackerID}
            handler={this.bindAttacker}
          />
          <OpponentCard
            name="gnom"
            id="b3"
            ad="3"
            hp="5"
            attackerID={this.state.attackerID}
            handler={this.bindAttacker}
          />
        </div>;
        <div align="center" className="bsector">
          <AllyCard
            name="ork"
            id="a1"
            ad="6"
            hp="2"
            attackerID={this.state.attackerID}
            handler={this.updateAttacker}
          />
          <AllyCard
            name="ogr"
            id="a2"
            ad="1"
            hp="7"
            attackerID={this.state.attackerID}
            handler={this.updateAttacker}
          />
          <AllyCard
            name="nimfa"
            id="a3"
            ad="2"
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
