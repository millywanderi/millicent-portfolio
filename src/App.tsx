import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </Layout>
  );
}

export default App;
