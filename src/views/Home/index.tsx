

import AboutUs from "./AboutUs";
import Cards from "./Cards";
import Hero from "./Hero";
import Layout from "@/Component/Layout";
import OptimalSection from "./OptimalSection";
import Optimalreverse from "./Optimalreverse";
import Purpose from "./Purpose";
import Mission from "./Mission";

const Home = () => {
  return (
    <Layout >
      <Hero />
      <Cards />
      <AboutUs />
      <OptimalSection />
      <Optimalreverse />
      <Purpose />
      <Mission />
    </Layout>

  );
};

export default Home;