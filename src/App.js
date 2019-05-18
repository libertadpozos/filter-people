import React from 'react';
import './App.css';
import People from './components/People';
//import Filters from './components/Filters';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data: [],
      genders:[],
      cities:[],
      checked:false,
      inputValue:""
    }
    this.getData=this.getData.bind(this);
    this.getData()
    this.handleFilter=this.handleFilter.bind(this);
  }

  getData(){
    fetch("https://randomuser.me/api/?results=50")
    .then(response=> response.json())
    .then(data=>{
      const info=data.results;
      const cities= info.map(person=> person.location.city)
      const uniqueCities =cities.filter(function(item,index){
        return cities.indexOf(item) >=index
      })
      const genders= info.map(person=>person.gender)
      const uniqueGenders= genders.filter(function(item,index){
        return genders.indexOf(item) >=index;
      })
      this.setState({
        data: info,
        cities: uniqueCities,
        genders: uniqueGenders
      })
    })
  }

  handleFilter(event){
    this.setState(
      {
        checked: !this.state.checked,
        inputValue: event.target.value,
      }
    )
  }

  

  render(){
    
    return (
      <div >
      <h1 className="title">Random People</h1>
        <People 
        info={this.state.data}
        genders={this.state.genders}
        checked={this.state.checked}
        filter={this.handleFilter}
        inputValue={this.state.inputValue}
        />
        
      </div>
    );
  }
}

export default App;
