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
        <>
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
                                        Decentralized exchange on zkSync.
                                        <br></br>
                                        We're creating new automated
                                        <br></br>
                                        market makers (AMMs) that eliminate
                                        <br></br>
                                        order book trading while keeping the
                                        <br></br>
                                        market as efficient as possible. 
                                    </div>
                                    <a className="work_btn" href="https://cryptoswap.org">
                                        View Project
                                    </a>
                                </div>
                                <div className="work_img">
                                    <img src='https://cryptoswap.org/icons/white_logo.svg' alt="cryptoswap" target="_blank" class="cryptoswap"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="work_list">
                    <div className="work_desc">
                            <div className="work_detail-odd">
                                <div className="work_img-odd">
                                    <img src='https://www.cryptocurrencyscript.com/images/defi_development/defi-development-company.webp' alt="defi.dev" class="defidev"/>
                                </div>
                                <div>
                                    <div className="work_title">DeFi Developer</div><br></br>
                                    <div className="work_info">
                                        Learn decentralized finance (DeFi).
                                        <br></br>
                                        defi.dev provides guides and news
                                        <br></br>
                                        for DeFi developers including new 
                                        <br></br>
                                        paradigms, best practices, and
                                        <br></br>
                                        general analysis/research on DeFi. 
                                    </div>
                                    <a className="work_btn"  target="_blank"  href="https://defi.dev">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="4" fill="none" xmlnsV="https://vecta.io/nano"><path opacity=".5" stroke="url(#A)" stroke-width="4" stroke-linecap="round" d="M 2.0000000000001 2.0000000000001 L 1438 2"/><defs><linearGradient id="A" x1="0" y1="3.99976" x2="1440" y2="5" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"/><stop offset=".17431" stop-color="#dedbfc"/><stop offset=".35446" stop-color="#dae8fd"/><stop offset=".64525" stop-color="#fbdaf0"/><stop offset=".81644" stop-color="#fbe8ee"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs></svg>
    </>
            )
};

export default AppWrap(
  Experience,
  'experience',
  'app__primarybg',
);