import css from './App.module.css';

import Hero from './Hero/Hero';
import Header from './Header/Header';
// import About from './About/About';
import MindMap from './MindMap/MindMap';
import Faq from './FAQ/Faq';
import Arts from './Arts/Arts';
import ContactUs from './ContactUs/ContuctUs';
import Footer from './Footer/Footer';

function GlobalWrapper() {
  return (
    <>
      <div className={css.container}>
        <Header />
        <Hero />
      </div>
      {/* <About /> */}
      <MindMap />
      <Faq />
      <Arts />
      <ContactUs />
      <Footer />
    </>
  );
}
function App() {
  return <GlobalWrapper />;
}
export default App;
