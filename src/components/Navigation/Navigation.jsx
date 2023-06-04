import { StyledNavLink } from "./Navigation.styles";

import React from 'react'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to='/'>Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/events'>Events</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/search'>Search</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation