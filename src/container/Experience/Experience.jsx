import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './Experience.scss';

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

const Experience = () => {

    return (
        
        <div className="app__experience">
            <div className="app__professional">
                <div className="experience_header">
                    <div className="experience_type">
                        Professional Experience
                    </div>
                    <div className="experience_desc">I've had a diverse array of work experience in finance, business, web development, math, and insurance.</div>
                </div>
                <div className="pro_container">
                    <motion.div 
                        variants={scaleVariants}
                        whileInView={scaleVariants.whileInView1}
                        className="pro_group">
                        <div className="pro_item gold">
                            <img src='https://design.gs.com/downloads/Goldman_Sachs_Blue_Box.png' alt="Goldman" className="goldman"/>
                        </div>
                    </motion.div>
                    <motion.div 
                        variants={scaleVariants}
                        whileInView={scaleVariants.whileInView2}
                        className="pro_group">
                        <div className="pro_item met">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/MetLife_logo.svg" alt="Metlife" className="metlife"/>
                            
                        </div>
                        <div className="pro_item forage">
                            <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/35/2021/07/Forage_Logo_Icon_Horiz_Green_RGB_1-480x123.png?v=182061" alt="Forage" className="theforage" />
                        </div>
                    </motion.div>
                    <motion.div 
                        variants={scaleVariants}
                        whileInView={scaleVariants.whileInView3}
                        className="pro_group">
                        <div className="pro_item baruch">
                            <img src="https://www.bcstep.website/wp-content/uploads/2022/04/Baruch-College-CUNY-Logo.png" alt="Baruch College" className="baruchcollege" />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="app__project"> 
                <div className="experience_header">
                    <div className="experience_type"> Project Experience </div>
                    <div className="experience_desc"> I like to focus on a few core projects that I am passionate about over the course of many years.</div>
                </div>     
                <div className="works_container">
                    <div className="work_list">
                        <div className="work_desc">
                            <div className="work_detail">
                                <div>
                                    <div className="work_title">CryptoSwap</div><br></br>
                                    <div className="work_info">
                                        Decentralized exchange on the zkSync network.
                                        <br></br>
                                        We're creating new automated market makers
                                        <br></br>
                                        (AMMs) that eliminate the order book while
                                        <br></br>
                                        keeping the market as efficient as possible. 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="work_img">
                            <img src='https://cryptoswap.org/icons/white_logo.svg' alt="cryptoswap" class="cryptoswap"/>
                        </div>
                    </div>
                    <div className="work_list">
                        DeFi
                    </div>
                </div>
            </div>
        </div>

    )
};

export default AppWrap(
  Experience,
  'experience',
  'app__primarybg',
);