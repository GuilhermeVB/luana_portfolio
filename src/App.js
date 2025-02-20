import { useState } from 'react';
import { SmoothScroll } from './components/scroll/SmoothScroll';
import { About } from './layout/about/About';
import { Banner } from './layout/banner/Banner';
import { Contact } from './layout/contact/Contact';
import { Cta } from './layout/cta/Cta';
import { Header } from './layout/header/Header';
import { Projects } from './layout/projects/Projects';
import { Services } from './layout/services/Services';
import './styles/global/App.scss';

export const App = () => {
  const [scroll, setScroll] = useState(null);

  return (
    <div className="App">
      <SmoothScroll setScroll={setScroll}>
        <Header />
        <Banner />
        <Cta scroll={scroll} />
        <About />
        <Projects />
        <Services />
        <Contact />
      </SmoothScroll>
    </div >
  );
}