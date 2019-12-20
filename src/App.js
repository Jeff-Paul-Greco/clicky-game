
import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import images from "./images.json";
import "./App.css";

class App extends Component {

  state = {

    images,
    highscore: 0,
    score: 0

  };

  gameEnd = () => {

    if (this.state.score > this.state.highscore) {

      this.setState({ highscore: this.state.score }, function () { });

    }

    this.state.images.forEach(image => {

      image.count = 0;

    });

    alert(`Game Over :( \nscore: ${this.state.score}`);

    this.setState({ score: 0 });

    return true;

  }

  clickCount = id => {

    this.state.images.find((x, i) => {

      if (x.id === id) {

        if (images[i].count === 0) {

          images[i].count = images[i].count + 1;

          this.setState({ score: this.state.score + 1 }, function () {

            console.log(this.state.score);

          });

          this.state.images.sort(() => Math.random() - 0.5)

          return true;

        } else {

          this.gameEnd();

        }
      }
    });
  }

  render() {
    return (

      <Wrapper>

        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>

        {this.state.images.map(image => (

          <Card

            clickCount={this.clickCount}
            id={image.id}
            key={image.id}
            image={image.image}

          />

        ))}

      </Wrapper>

    );
  }
}

export default App;