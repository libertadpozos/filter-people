import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Card extends React.Component {
  render() {
    const { match, info } = this.props;
    const { cardId } = match.params;
    const arrCard = info.find(item => item.login.uuid === cardId);
    console.log(info)

    return (
      <article>
        <h2>{`${arrCard.name.first} ${arrCard.name.last}`}</h2>
        <img src={arrCard.picture.thumbnail} alt={arrCard.name.first} />
        <p>{arrCard.location.city}</p>
        <p>{arrCard.dob.age}</p> 
        <Link to="/">Back</Link>
        
      </article>
    );
  }
}
Card.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
