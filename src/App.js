/* eslint-disable jsx-a11y/alt-text */
import "./css/normalize.css";
import "./css/main.css";
import Footer from "./component/layout/Footer";
import pro1 from "./img/pro_1.1.png";
import pro2 from "./img/pro_1.2.png";
import pro3 from "./img/pro_1.3.png";
import pro4 from "./img/pro_1.4.png";
import pro5 from "./img/pro_1.5.png";
import pro6 from "./img/pro_1.6.png";
import pro7 from "./img/pro_1.7.png";
import { useEffect } from "react";
import AboutMe from "./component/AboutMe";
import Header from "./component/layout/Header";
import Sidebar from "./component/layout/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
