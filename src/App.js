import React from 'react';
import './App.css';
import People from './components/People'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data: []
    }
    this.getData=this.getData.bind(this);
    this.getData()
  }

  getData(){
    fetch("https://randomuser.me/api/?results=50")
    .then(response=> response.json())
    .then(data=>{
      const info=data.results;
      this.setState({
        data: info,
      })
    })
  }

  render(){
    return (
      <div className="App">
      <h1>Random People</h1>
        <People 
        info={this.state.data}
        />
      </div>
    );
  }
}

export default App;
