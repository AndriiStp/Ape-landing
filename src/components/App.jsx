import css from "./App.module.css";

import Hero from "./Hero/Hero";
import Header from "./Header/Header";
import About from "./About/About";
import MindMap from "./MindMap/MindMap";

function GlobalWrapper() {
  return (
    <div className={css.app}>
      <div className={css.container}>
        <Header />
        <Hero />
      </div>
      <About />
      <MindMap />
    </div>
  );
}
function App() {
  return <GlobalWrapper />;
}
export default App;
