import React from 'react';
import './App.css';
import People from './components/People'
import Filters from './components/Filters'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      people:{
        data: [],
        isFetching: true,
      } ,
      filters:{
        genders:[],
        cities:[],    
        allCities:[]    
      }
    }
    this.getData=this.getData.bind(this);
    this.handlerGenderFilter=this.handlerGenderFilter.bind(this);
    this.handlerCityFilter=this.handlerCityFilter.bind(this);
  }
componentDidMount(){
  this.getData()
}

  getData(){
    fetch("https://randomuser.me/api/?results=50")
    .then(response=> response.json())
    .then(data=>{
      const info=data.results;
      this.setState(prevState=>{
        return {
          people: {
            data: info,
            isFetching: false
          },
          filters: {
            ...prevState.filters,
            allCities: data.results
            .map(item=> item.location.city)
            .filter((item,ind,arr)=>arr.indexOf(item)===ind)
          }
        
        }
      })
    })
  }

  handlerGenderFilter(event){
    const {value, checked}=event.target
    this.setState(prevState =>{
      return {
        filters:{
          ...prevState.filters,
          genders: checked
          ? prevState.filters.genders.concat(value)
          : prevState.filters.genders.filter(item=> item !==value)
          
        }
      }
    })
  }


  handlerCityFilter(event){
    const {value, checked}=event.target
    console.log(value, checked)
   
    this.setState(prevState =>{
      return {
        filters:{
          ...prevState.filters,
          cities: prevState.filters.cities.find(item=> item===value)
          ? prevState.filters.cities.filter(item=> item !==value)
          :  prevState.filters.cities.concat(value)
         
          
        }
      }
    })
  }

  render(){
    const {genders, cities, allCities}=this.state.filters;
    const {data}= this.state.people;
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
        <React.Fragment>
        <Filters 
        onGenderChange={this.handlerGenderFilter}
        genders={genders}
        allCities={allCities}
        cities={cities}
        onCityChange={this.handlerCityFilter}
        />
        <People 
        info={data
        .filter(user => {
          if (!genders.length){
            return true 
          } else{
            return genders.includes(user.gender)
          }
        } )
        .filter(user => !cities.length || cities.includes(user.location.city))
      }
         />
        </React.Fragment>
      )
      }
      
        
      </div>
      
    );
  }
}

export default App;
