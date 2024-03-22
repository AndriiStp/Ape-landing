import css from './App.module.css';

import Hero from './Hero/Hero';
import Header from './Header/Header';
import About from './About/About';
import MindMap from './MindMap/MindMap';
import Faq from './FAQ/Faq';
import Arts from './Arts/Arts';
import ContactUs from './ContactUs/ContuctUs';
import Footer from './Footer/Footer';
import apes from '../images/apeCollection/apeCollection.json';

function GlobalWrapper() {
  return (
    <>
      <div className={css.container}>
        <Header />
        <Hero />
      </div>
      <About />
      <MindMap />
      <Faq />
      <Arts apes={apes} />
      <ContactUs />
      <Footer />
    </>
  );
}
function App() {
  return <GlobalWrapper />;
}
export default App;
