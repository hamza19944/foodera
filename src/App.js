import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { Fragment, useState } from 'react';
import Navs from './components/navs/Navs';
import Footer from './components/footer/Footer';

function App() {
  const [scroll, setScrollY] = useState(0)
  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY)
  })

  return (
    <Fragment>
      <Navs scrollY = {scroll} />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;