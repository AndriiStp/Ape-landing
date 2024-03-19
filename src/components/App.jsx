import css from "./App.module.css";

import Hero from "./Hero/Hero";
import Header from "./Header/Header";
import About from "./About/About";

function GlobalWrapper() {
  return (
    <div className={css.app}>
      <div className={css.container}>
        <Header />
        <Hero />
      </div>
      <About />
    </div>
  );
}
function App() {
  return <GlobalWrapper />;
}
export default App;
