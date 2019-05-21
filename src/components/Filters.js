import React from "react";
import PropTypes from "prop-types";

class Filters extends React.Component {
  render() {
    const { onGenderChange, genders, allCities, cities, onCityChange } = this.props;
    return (
      <form>
        <fieldset>
          <legend>Gender</legend>
          <input
            type="checkbox"
            name="genders"
            id="female"
            value="female"
            onChange={onGenderChange}
            checked={genders.includes("female")}
          />
          <label htmlFor="female">Female</label>
          <input
            type="checkbox"
            name="genders"
            id="male"
            value="male"
            onChange={onGenderChange}
            checked={genders.includes("male")}
          />
          <label htmlFor="male">Male</label>
        </fieldset>
        <fieldset>
        <legend>Cities</legend>
          {allCities.map(city => {
            return (
              <React.Fragment key={city}>
                <input
                  type="checkbox"
                  name="cities"
                  id={city}
                  value={city}
                  onChange={onCityChange}
                  checked={cities.includes(city)}
                />
                <label htmlFor={city}>{city}</label>
              </React.Fragment>
            );
          })}
        </fieldset>
        
      </form>
    );
  }
}

Filters.propTypes = {
  onGenderChange: PropTypes.func.isRequired,
  genders: PropTypes.arrayOf(PropTypes.string).isRequired,
  allCities: PropTypes.arrayOf(PropTypes.string).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityChange: PropTypes.func.isRequired,

};

export default Filters;
