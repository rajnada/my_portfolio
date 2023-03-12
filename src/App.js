/* eslint-disable jsx-a11y/alt-text */
import "./css/normalize.css";
import "./css/main.css";
import Footer from "./component/layout/Footer";
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
