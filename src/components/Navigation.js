import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { initLinks as links } from '../constants';
import { useScroll } from '../hooks/useScroll';

const Navigation = () => {

  const [highlighted, setHighlight] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY > window.innerHeight) {
      setHighlight(true);
    }
    else {
      setHighlight(false);
    }
  }, [scrollY])




  return (
    <div className={highlighted ? "flt-navbar highlighted" : "flt-navbar"}>
      <div className="flt-navbar-items">
        {links.map((link, i) => (
          <AnchorLink href={link.url} key={i} className="flt-navbar-item">
            {link.label}
          </AnchorLink>
        ))}
      </div>
    </div >
  );
};
export default Navigation;
