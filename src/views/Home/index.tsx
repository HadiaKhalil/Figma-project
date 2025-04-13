

import AboutUs from "./AboutUs";
import Cards from "./Cards";
import Hero from "./Hero";
import Layout from "@/Component/Layout";

const Home = () => {
  return (
    <Layout >
      <Hero />
      <Cards />
      <AboutUs />
    </Layout>

  );
};

export default Home;