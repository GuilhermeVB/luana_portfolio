import { About } from './layout/about/About';
import { Banner } from './layout/banner/Banner';
import { Contact } from './layout/contact/Contact';
import { Cta } from './layout/cta/Cta';
import { Header } from './layout/header/Header';
import { Projects } from './layout/projects/Projects';
import { Services } from './layout/services/Services';
import './styles/global/App.scss';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Cta />
      <div className='transparent' />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}