
import Hero from "./Hero";

import Layout from "@/Component/Layout"
import Secondsection from "./Secondsection";
import Second from "./Second";
import Forth from "./Forth";
import Grid from "./Grid";
import Last from "./Last";


const Home = () => {
  return (
    <Layout>

      <Hero />
     
  <Second />
  <Secondsection />
  <Forth />
  <Grid />
  <Last />
    </Layout>
  );
};

export default Home;


