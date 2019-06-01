import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const dateToFormat = new Date(Date.now('DD MM YYYY'));
const Header = () => {
  return (
    <div className="header">
      <span className="date">
        {<Moment format="MMMM Do YYYY" date={dateToFormat} />}
      </span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div>
  );
};

export default Header;
