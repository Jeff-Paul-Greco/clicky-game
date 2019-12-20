
import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import images from "./images.json";
import "./App.css";

class App extends Component {

  //manages state for images and scores
  state = {

    images,
    highscore: 0,
    score: 0

  };

  //function call to end game, reset count variables and reset score
  gameEnd = () => {

    if (this.state.score > this.state.highscore) {

      this.setState({ highscore: this.state.score }, function () { });

    }

    this.state.images.forEach(image => {

      image.count = 0;

    });

    alert(`                                               Game Over
                                                Try Again! 
                                                         
                                                  Score: ${this.state.score}`);

    this.setState({ score: 0 });

    return true;

  }

  //increments count variable to flag images as having been clicked this game
  clickCount = id => {

    this.state.images.find((x, i) => {

      if (x.id === id) {

        //if image is unclicked, increment count and score
        if (images[i].count === 0) {

          images[i].count = images[i].count + 1;

          this.setState({ score: this.state.score + 1 }, function () {

            console.log(this.state.score);

          });

          //remaps images to different locations on screen
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

      //wrapper component
      <Wrapper>

        {/* header component */}
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>

        {/* maps objects to each card component */}
        {this.state.images.map(image => (

          //card component
          <Card

            //mapping values to each card
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