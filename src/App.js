import { Banner } from './layout/banner/Banner';
import { Cta } from './layout/cta/Cta';
import { Header } from './layout/header/Header';
import './styles/global/App.scss';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Cta />
    </div>
  );
}