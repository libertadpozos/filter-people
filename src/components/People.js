import React from 'react';
import  "./People.css"




class People extends React.Component{
 
  
  filterGender(){
  
  const {info, inputValue, checked}=this.props;
  if (checked===true){
   const arrFilterGender= info.filter(person=>{
     const gender= person.gender
    if(gender===inputValue){
      return true
    }
    else 
    return false 
   }


   )
 return arrFilterGender
}
  else if (checked===false){
   return info
 }
 }
 
    render(){
      const {info, genders, filter, checked, inputValue} = this.props
        console.log(genders, info, checked, inputValue)
        

        if (!info.length){
            return <p>Loading...</p>
        }
        else {
          const blackGender= this.filterGender();

            return (
                <div className="main__container">
                <div>
                {genders.map(gender => (
                  <label htmlFor={gender}>
                    <input
                      id={gender}
                      type="checkbox"
                      value={gender}
                      name="genderOptions"
                      onChange={filter}
                    />
                    {gender}
                  </label>
                ))}
              </div>

                <ul className="person__list">
                    {blackGender
                        
                        .map(person=>
                            <li key={person.login.uuid} id={person.login.uuid}>
                                <div className="card__container">
                                <img src={person.picture.medium} alt="random person"/>
                                <p>{`${person.name.first} ${person.name.last}`}</p>
                                <p>{person.gender}</p>
                                <p>{person.location.city}</p>
                                </div>
                            </li>
                            )
                    }
                </ul>
                </div>
            )
        }
       

       
    }
}

export default People;
