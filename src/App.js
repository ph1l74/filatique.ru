import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Section from './components/Section';
import Navigation from './components/Navigation';
import Listen from 'components/ListenPage';
import Contact from 'components/ContactPage';
import Press from 'components/PressPage';


function App() {
  return (
    <div>
      <Navigation />
      <Section id="home" color="primary" gradient title="filatique">
      </Section>
      <Section id="listen" className="listen" title="listen">
        <Listen />
      </Section>
      <Section id="press" className="press" title="press">
        <Press />
      </Section>
      <Section id="socials" title="socials" className="socials">
        <Contact />
      </Section>
    </div>
  );
}

export default App;
