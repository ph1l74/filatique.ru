import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactWOW from 'react-wow';
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
            <ReactWOW animation="fadeInDown" duration='1s'>
              <AnchorLink href="#home" key="home" className="flt-navbar-item">
                <FontAwesomeIcon icon={faHome} />
              </AnchorLink>
            </ReactWOW>
            : null
        }

        {
          links.map((link, i) => {
            const delay = i * 100 / 1000 + 1;
            return (
              <ReactWOW delay={`${delay}s`} animation="fadeInDown" duration="0.75s" key={'nav_wow_' + i}>
                <AnchorLink href={link.url} key={'nav_' + i} className="flt-navbar-item">
                  {link.label}
                </AnchorLink>
              </ReactWOW>
            )
          }
          )
        }
      </div>


    </div >
  );
};

export default Navigation;
