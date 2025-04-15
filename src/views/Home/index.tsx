

import AboutUs from "./AboutUs";
import Cards from "./Cards";
import Hero from "./Hero";
import Layout from "@/Component/Layout";
import OptimalSection from "./OptimalSection";
import Optimalreverse from "./Optimalreverse";
import Purpose from "./Purpose";
import Mission from "./Mission";
import Products from "./Products"
import ViewsSlider from "./VeiwsSlider";
import Reverce from "./Reverce";
const Home = () => {
  return (
    <Layout >
      <Hero />
      <Cards />
      <AboutUs />
      <OptimalSection />
      <Optimalreverse />
      <Reverce />
      <Purpose />
      <Mission />
      <Products />
      <ViewsSlider />
    </Layout>

  );
};

export default Home;