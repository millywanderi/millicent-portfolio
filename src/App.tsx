import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
    </Layout>
  );
}

export default App;
