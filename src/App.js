import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import data from "./data.json";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    data,
    score: 0,
    highScore: 0
  };

  resetState = () => {
    this.setState({
      data: this.state.data.map(player => ({ ...player, clicked: false })),
      score: 0
    }, () => this.shufflePics())
  }

  handleCardCount = id => {
    const data = [...this.state.data];
    let score = this.state.score;

    data.forEach((player, i) => {
      if (player.id === id) {
        // if card has not been clicked
        if (!player.clicked) {
          // -- increase score
          score = this.state.score + 1;
          // -- make pic.clicked = true
          data[i].clicked = true;
          console.log("Not failed");


          this.setState({
            score: score,
            highScore: Math.max(this.state.highScore, score),
            data: data
          }, () => this.shufflePics());

        } else {
          console.log("Failed");
          this.resetState();
        }
      }
    })
  }

  shufflePics() {
    const array = [...this.state.data];
    let i = this.state.data.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    this.setState({ data: array });
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          resetState={this.resetState}
          highScore={this.state.highScore}
        />

        <Wrapper>
          {this.state.data.map(player => (
            <PlayerCard
              handleCardCount={this.handleCardCount}
              id={player.id}
              key={player.id}
              image={player.image}
              clicked={player.clicked}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}
export default App;