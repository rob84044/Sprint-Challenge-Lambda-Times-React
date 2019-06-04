import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import styled from '@emotion/styled';
import {
  HeaderDiv,
  HeaderSpanDate,
  HeaderH1,
  HeaderSpanTemp
} from '../components/styledComps/styledHeader';
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const dateToFormat = new Date(Date.now('DD MM YYYY'));
const Header = () => {
  return (
    <HeaderDiv>
      <HeaderSpanDate>
        {<Moment format="MMMM Do YYYY" date={dateToFormat} />}
      </HeaderSpanDate>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderSpanTemp>98°</HeaderSpanTemp>
    </HeaderDiv>
  );
};

export default Header;
