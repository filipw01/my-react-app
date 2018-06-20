import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attacker: null,
      ad: null,
      hp: null,
      isAttacking: null
    };
  }

  updateAttacker = (name, ad, hp, isAttacking) => {
    this.setState({
      attacker: name,
      ad: ad,
      hp: hp,
      isAttacking: !isAttacking
    });
    return !isAttacking;
  };

  render() {
    return (
      <div>
        <h3>Attacker is {this.state.attacker}</h3>
        <h3>AD is {this.state.ad}</h3>
        <h3>HP is {this.state.hp}</h3>
        <div align="center" className="wsector">
          <Card name="ork" ad="6" hp="2" handler={this.updateAttacker} />
          <Card name="ogr" ad="1" hp="7" handler={this.updateAttacker} />
          <Card name="nimfa" ad="2" hp="5" handler={this.updateAttacker} />
        </div>
        <div align="center" className="bsector">
          <Card name="krasnolud" ad="5" hp="3" handler={this.updateAttacker} />
          <Card name="goblin" ad="4" hp="4" handler={this.updateAttacker} />
          <Card name="gnom" ad="3" hp="5" handler={this.updateAttacker} />
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      ad: this.props.ad,
      hp: this.props.hp,
      isAttacking: false
    };
  }

  handleOutsideClick = () => {
    this.setState({
      isAttacking: false
    });
  };

  handleClick = () => {
    this.setState({
      isAttacking: this.props.handler(
        this.state.name,
        this.state.ad,
        this.state.hp,
        this.state.isAttacking
      )
    });
  };

  render() {
    if (this.state.isAttacking) {
      document.addEventListener("click", this.handleOutsideClick);
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
      document.removeEventListener("click", this.handleOutsideClick);
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

export default App;
