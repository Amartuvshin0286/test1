import React, { Component } from "react";
import "./styles.css";
import { CardList } from "./components/card-list/index";
import { SearchBox } from "./components/search-box/index";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      SearchField: ""
    };
  }

  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter((el) =>
      el.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1>Hello class components</h1>
        <SearchBox onSearch={this.onSearchChanged} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
