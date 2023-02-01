import "./App.css";
import React from "react";
import WalterWhite from "./WalterWhite.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Walter White",
      bio: "Walter was a skilled chemist and co-founder of a technology firm before he accepted a buy-out from his partners. Walt became a high-school chemistry teacher in Albuquerque, and barely making ends meet with his family with wife Skyler (Anna Gunn) and son Walt Jr. (RJ Mitte)",
      imgSrc: WalterWhite,
      profession:
        "Mr. White, is a former chemist and major narcotics distributor from Albuquerque, New Mexico, whose drug empire became the largest meth operation in American history, surpassing both Gustavo Fring's drug empire and the Cartel's ",
      bool: false,
      counter: 0,
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  };

  toggle() {
    this.setState({ bool: !this.state.bool });
    if (!this.state.bool) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.bool ? (
          <div>
            <h1 style={{ color: " #5B11E5" }}>
              {" "}
              I am not in danger, I am the danger{" "}
            </h1>
            <h2 style={{ color: "#0DB8EF" }}>Walter White's bio</h2>
            <h3 style={{ color: "#9C9EAD" }}>
              This is {this.state.fullName}. {this.state.bio} .
            </h3>
            <img
              src={this.state.imgSrc}
              width="400px"
              height="400px"
              alt="Walter white"
            />
            <h2 style={{ color: "#0DB8EF" }}>Profession</h2>
            <h3 style={{ color: "#9C9EAD" }}>{this.state.profession}</h3>
          </div>
        ) : null}
        <br /> <br />
        {this.state.bool ? (
          <div>
            <span style={{ color: "white" }}>
              {" "}
              {this.state.counter}
              {" Seconds"} <br />
              <br />
            </span>
            <button onClick={() => this.toggle()}>Hide</button>
          </div>
        ) : (
          <button onClick={() => this.toggle()}>Show</button>
        )}
        <br />
      </div>
    );
  }
}
export default App;
