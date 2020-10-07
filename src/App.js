import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Section from './components/Section';
import Navigation from './components/Navigation';
import Listen from 'components/ListenPage';


function App() {
  return (
    <div>
      <Navigation />
      <Section color="primary" gradient >
      </Section>
      <Section id="listen" className="listen">
        <Listen />
      </Section>
      <Section id="press" ></Section>
      <Section id="socials" ></Section>
      <Section id="contact" ></Section>
    </div>
  );
}

export default App;
