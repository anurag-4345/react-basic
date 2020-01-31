import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    title: "Loading"
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res2 => {
        console.log(res2)
        this.setState({
          title: res2[0].title
        })
      })
  }
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <h1>  { this.state.title } </h1>
      </div>
    )
  }
}

export default App;
