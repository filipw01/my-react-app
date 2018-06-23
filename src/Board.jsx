import React from "react";
import OpponentCard from "./OpponentCard";
import AllyCard from "./AllyCard";
import AttackOrder from "./AttackOrder";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attackerAd: null,
      attackerHp: null,
      attackerName: null,
      nextAttack: []
    };
  }

  updateAttacker = (name, ad, hp) => {
    this.setState({
      attackerAd: ad,
      attackerHp: hp,
      attackerName: name
    });
  };

  bindAttacker = (prey, preyAd, preyHp) => {
    let array = [...this.state.nextAttack];
    if (this.state.attackerName) {
      for (let value of array) {
        if (value[0] === this.state.attackerName) {
          let index = array.indexOf(value);
          this.setState({
            nextAttack: array.splice(index, 1)
          });
        }
      }
      this.setState({
        nextAttack: [
          ...array,
          [
            this.state.attackerName,
            prey,
            [this.state.attackerAd, preyAd],
            [this.state.attackerHp, preyHp]
          ]
        ]
      });
    }
  };

  handleOutsideClick = () => {
    this.setState({
      attackerAd: null,
      attackerHp: null,
      attackerName: null
    });
  };

  endTurn = () => {
    this.setState({
      nextAttack: []
    });
  };

  render() {
    if (this.state.attackerName) {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    }
    return (
      <div>
        <h3>Attacker is {this.state.attackerName}</h3>
        <h3>AD is {this.state.attackerAd}</h3>
        <h3>HP is {this.state.attackerHp}</h3>
        <AttackOrder order={this.state.nextAttack} />
        <button onClick={this.endTurn}> End turn </button>
        <div align="center" className="wsector">
          <OpponentCard
            name="krasnolud"
            ad="5"
            hp="3"
            attackerName={this.state.attackerName}
            handler={this.bindAttacker}
          />
          <OpponentCard
            name="goblin"
            ad="4"
            hp="4"
            attackerName={this.state.attackerName}
            handler={this.bindAttacker}
          />
          <OpponentCard
            name="gnom"
            ad="3"
            hp="5"
            attackerName={this.state.attackerName}
            handler={this.bindAttacker}
          />
        </div>
        <div align="center" className="bsector">
          <AllyCard
            name="ork"
            ad="6"
            hp="2"
            attackerName={this.state.attackerName}
            handler={this.updateAttacker}
          />
          <AllyCard
            name="ogr"
            ad="1"
            hp="7"
            attackerName={this.state.attackerName}
            handler={this.updateAttacker}
          />
          <AllyCard
            name="nimfa"
            ad="2"
            hp="5"
            attackerName={this.state.attackerName}
            handler={this.updateAttacker}
          />
        </div>
      </div>
    );
  }
}

export default Board;
