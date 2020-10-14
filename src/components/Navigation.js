import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { initLinks as links } from '../constants';
import { useScroll } from '../hooks/useScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {

  const [highlighted, setHighlight] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (scrollY >= window.innerHeight) {
      setHighlight(true);
      setScrolled(true);
    }
    else {
      setHighlight(false);
      setScrolled(false);
    }
  }, [scrollY])




  return (
    <div className={highlighted ? "flt-navbar highlighted" : "flt-navbar"}>
      <div className="flt-navbar-items">
        {
          scrolled ?
            <AnchorLink href="#home" key="home" className="flt-navbar-item"><FontAwesomeIcon icon={faHome} /></AnchorLink>
            : null
        }
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
