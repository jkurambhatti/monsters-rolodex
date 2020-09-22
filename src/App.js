import React, { Component } from "react";

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      filteredMonsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({
          monsters: users,
          filteredMonsters: users
        })
      })
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <h1 id='headline' > Monsters Rolodox</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
