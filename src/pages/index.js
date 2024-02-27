import React from "react";
import Layout from "../components/layout";
import Main from "../components/Main"; // Yeni bileşeni içe aktarın

const Home = () => {
  return (
    <Layout>
      <Main /> {/* Main bileşenini burada kullanın */}
      {/* Diğer içerikler */}
    </Layout>
  );
};

export default Home;