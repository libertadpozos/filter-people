import React from 'react';

class People extends React.Component{
    render(){
        const {info} = this.props
        console.log(info)

        if (!info.length){
            return <p>Loading...</p>
        }
        else {
            return (
                <ul>
                    {info
                        .map(person=>
                            <li>
                                <img src={person.picture.medium}/>
                                <p>{`${person.name.first} ${person.name.last}`}</p>
                                <p>{person.gender}</p>
                                <p>{person.location.city}</p>
                            </li>
                            
                            )
                    }
                </ul>
            )
        }
       

       
    }
}

export default People;
