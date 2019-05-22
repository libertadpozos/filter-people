import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class People extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <ul>
        {info.map(person => (
          <li key={person.login.uuid}>
            <Link to={`/card/${person.login.uuid}`}>
              <h2>{`${person.name.first} ${person.name.last}`}</h2>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

People.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default People;
