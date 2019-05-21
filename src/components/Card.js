import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  render() {
    const { name, img, city, age } = this.props;
    return (
      <article>
        <h2>{name}</h2>
        <img src={img} alt={name} />
        <p>{city}</p>
        <p>{age}</p>
      </article>
    );
  }
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Card;
