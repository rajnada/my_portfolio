/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

import Footer from "./component/layout/Footer";
import AboutMe from "./component/AboutMe";
import Header from "./component/layout/Header";
import Sidebar from "./component/layout/Sidebar";
import Particles from 'react-particles';

import { makeStyles, mergeClasses } from '@material-ui/styles';
import Navbar from './component/layout/Navbar';
import "./css/main.css";



const useStyle = makeStyles({
  particlesCanva: {
    position: 'absolute',
  },
});
function App() {
  const classes = useStyle();

  return (
    <>
      {/* <Sidebar />
      <Header /> */}
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: 'tomato',
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
          },
        }}
      />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
