import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card'

class People extends React.Component{
    render(){
        const {info} = this.props
            return (
                <ul>
                    {info
                        .map(person=>
                            <li key={person.login.uuid}>
                                <Card 
                                name={`${person.name.first} ${person.name.last}`}
                                img={person.picture.thumbnail}
                                city={person.location.city}
                                age={person.dob.age}
                                />
                                
                            </li>
                            
                            )
                    }
                </ul>
            )
        }
    };
    
    
    People.propTypes={
        info: PropTypes.arrayOf(PropTypes.object).isRequired
    }   

export default People;
