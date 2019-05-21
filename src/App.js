import React from 'react';
import './App.css';
import People from './components/People'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      people:{
        data: [],
        isFetching: true,
      } 
    }
    this.getData=this.getData.bind(this);
   
  }
componentDidMount(){
  this.getData()
}

  getData(){
    fetch("https://randomuser.me/api/?results=50")
    .then(response=> response.json())
    .then(data=>{
      const info=data.results;
      this.setState({
        people: {
          data: info,
          isFetching: false
        }
      })
    })
  }

  render(){
    return (
    
      <div className="App">
     
      <header>
      <h1>Random People</h1>
      </header>
      {this.state.people.isFetching
      ? (
        <p>Loading...</p>
        
        )
      : (
        <People info={this.state.people.data} />
      )
      }
      
        
      </div>
      
    );
  }
}

export default App;
