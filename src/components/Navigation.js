import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { initLinks as links } from '../constants';

const Navigation = () => {

  return (
    <div className="flt-navbar">
      <div className="flt-navbar-items">
        {links.map((link, i) => (
          <AnchorLink href={link.url} key={i} className="flt-navbar-item">
            {link.label}
          </AnchorLink>
        ))}
      </div>
    </div>
  );
};
export default Navigation;
