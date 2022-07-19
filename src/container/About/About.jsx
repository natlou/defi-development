import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './About.scss';

const scaleVariants = {
  whileInView1: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  whileInView2: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
  },
  whileInView3: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1.25,
        ease: 'easeInOut',
      },
  },
};

const About = () => {

    return (
        <div className='app__about'>
          <img  className='app__about-warp' src="https://defi-portfolio.s3.amazonaws.com/static/media/bg_about.png"/>
          <motion.div className='app__about-content'  
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}>
            <div className="content-header">
              My skills evolve as
              <br></br>
              the <span>Web</span> and <span>DeFi</span> evolves
            </div>
            <div className='content-text'>
              I'm Nathan, a junior Math-CS major at UCLA, 
              <br></br>
              I never expected to become a web developer,
              <br></br>
              but my desire to build decentralized apps is 
              <br></br>
              what led me into web development. Since then, 
              <br></br>
              I've developed a strong passion for all stages
              <br></br>
              of the web development process, including:
              <br></br>
              UX/UI design, Front-end, Back-end, and DevOps.
              <br></br>
              Together with math and finance, I use web
              <br></br>
              development to build financial applications.
              <br></br>
              Here are some of my research interests: 
            </div>
            <div className="content-interests">
              <motion.div 
               variants={scaleVariants}
               whileInView={scaleVariants.whileInView2}
               className="glass-card-teal">
                MEV - Miner Extractable Value 
                <br></br>
                <br></br>
                To get rid of arbitrage, we must arbitrage first. 
                <br></br>
                I build MEV bots to arbitrage so that I can build 
                <br></br>
                systems in the future that can reduce MEV.
              </motion.div>
              <motion.div 
               variants={scaleVariants}
               whileInView={scaleVariants.whileInView1}
               className="glass-card-teal">
                Atomic Swaps 
                <br></br>
                <br></br>
                Atomic swaps and atomicity of the blockchain is 
                <br></br>
                what drew me into DeFi. I want to be involved
                <br></br>
                in the development of trustless atomic swaps.
              </motion.div>
              <motion.div 
               variants={scaleVariants}
               whileInView={scaleVariants.whileInView2}
               className="glass-card-teal">
                Web Development 
                <br></br>
                <br></br>
                Web dev enables me to build DeFi applications
                <br></br>
                and defi motivates me to hone my web dev skills.
                <br></br>
                Be it web2, web3, or web5, I'll always keep up. 
              </motion.div>
            </div>   
          </motion.div>
        </div>
      );
}

export default AppWrap(
    About,
    'about',
    'app__darkbg',
);