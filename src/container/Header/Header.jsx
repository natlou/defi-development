import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>🌐🤖</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Nathan</h1>
          </div>
        </div>
        <div className="app__flex app_header-animate-container">
          <div className='animation-cmp '>
                
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
    
          </div>

          <motion.div className="app_header-titles">
            <div className="tag-cmp ">
              <p className="p-text title-item">Web Developer</p>
              <p className="p-text"></p>
            </div>
            <div className="tag-cmp ">
              <p className="p-text title-item">DeFi Developer</p>
              <p className="p-text"></p>
            </div>
            <div className="tag-cmp title-item">
              <p className="p-text title-item">Math-CS Student</p>
              <p className="p-text"></p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>

    <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
        >
        {[images.typescript, images.next, images.solidity,
        images.sass,
            images.redux, images.react,  images.git,
            images.node,  images.ethers,  images.cpp, 
            images.javascript,  images.sql, images.docker, images.aws, 
            images.webpack, images.python, images.hardhat, images.golang].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
            </div>
        ))}
    </motion.div>

  </div>
);

export default AppWrap(Header, 'home');