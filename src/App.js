import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import data from "./data.json";

class App extends Component {
  // Setting this.state.data to the data json array
  state = {
    data
  };

  // Map over this.state.data and render a PlayerCard component for each data object
  render() {
    return (
      <Wrapper>
        <Title>Players List</Title>
        {this.state.data.map(data => (
          <PlayerCard
            id={data.id}
            key={data.id}
            image={data.image}
            name={data.name}
            clicked={data.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
