import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Transition } from 'react-transition-group';
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

  const duration = 250;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    y: '-100px'
  }

  const transitionStyles = {
    entering: { opacity: 1, y: 0 },
    entered: { opacity: 1, y: 0 },
    exiting: { opacity: 0, y: -100 },
    exited: { opacity: 0, y: -100 },
  };


  return (
    <div className={highlighted ? "flt-navbar highlighted" : "flt-navbar"}>

      <div className="flt-navbar-items">
        {
          scrolled ?
            <Transition timeout={2000} appear={true} enter={true} in={true}>
              {
                state => (
                  <AnchorLink href="#home" key="home" className="flt-navbar-item" style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                    <FontAwesomeIcon icon={faHome} />
                  </AnchorLink>
                )
              }

            </Transition>
            : null
        }

        {links.map((link, i) => (
          <Transition timeout={duration} key={i} appear in={true}>
            {
              state => (
                <AnchorLink href={link.url} key={i} className="flt-navbar-item" style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}>
                  {link.label}
                </AnchorLink>
              )
            }
          </Transition>
        ))}
      </div>


    </div >
  );
};
export default Navigation;
