import React, { Component } from "react";
import "./App.css";
import Person from "../Component/Person";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User1 from "../Component/User1";
import User2 from "../Component/User2";
import User3 from "../Component/User3";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Construcotr");
    this.state = {
      name: "Mahadev",
      count: 1
    };
  }

  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Compoent Did mount");
  }

  clickperson = event => {
    this.setState({ name: "Ravi", count: 2 });
  };

  render() {
    var per = null;
    console.log("Rendering()");
    let personItems = [];

    for (var i = 0; i < this.state.count; i++) {
      personItems.push(
        <Person name={this.state.name} changeName={this.clickperson} key={i} />
      );
    }
    return (
      <div className="App">
        <Router>
          <div>
            <header className="Posts">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/user1",
                    //    hash: "#submit",
                        search: "?search-submit=true"
                      }}
                    >
                      User 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/user2"
                      }}
                    >
                      User 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/user3"
                      }}
                    >
                      User 3
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>

            {personItems}
            <button onClick={this.clickperson}>Change person name</button>
           

            <Route path="/" exact render={() => <h1>Home page</h1>} />
            <Route path="/user1" component={User1} />
            <Route path="/user2" component={User2} />
            <Route path="/user3" component={User3} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
