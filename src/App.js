import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Section from './components/Section';
import Navigation from './components/Navigation';
import Listen from 'components/ListenPage';
import Contact from 'components/ContactPage';
import Press from 'components/PressPage';
import Footer from 'components/Footer';


function App() {
  return (
    <div>
      <Navigation />
      <Section id="home" className="flt-section home" title="filatique" imgsrc="/img/bg-cover.jpg">
      </Section>
      <Section id="listen" className="flt-section listen" title="listen">
        <Listen />
      </Section>
      <Section id="press" className="flt-section press" title="press">
        <Press />
      </Section>
      <Section id="socials" className="flt-section socials" title="socials" >
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
