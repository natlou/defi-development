import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Experience.scss';

const Experience = () => {

    return (
        
        <div className="app__experience">
            <motion.div className="app__professional">
                <div className="experience_header">
                    <div className="experience_type">
                        Professional Experience
                    </div>
                    <div className="experience_desc">I've had a diverse array of work experience in finance, business, web development, math, and insurance.</div>
                </div>
                <div className="pro_container">
                    <div className="pro_group">
                        <div className="pro_item gold">
                            <img src='https://design.gs.com/downloads/Goldman_Sachs_Blue_Box.png' alt="Goldman" className="goldman"/>
                        </div>
                    </div>
                    <div className="pro_group ">
                        <div className="pro_item met">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/MetLife_logo.svg" alt="Metlife" className="metlife"/>
                            
                        </div>
                        <div className="pro_item forage">
                            <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/35/2021/07/Forage_Logo_Icon_Horiz_Green_RGB_1-480x123.png?v=182061" alt="Forage" className="theforage" />
                        </div>
                    </div>
                    <div className="pro_group">
                        <div className="pro_item baruch">
                            <img src="https://www.bcstep.website/wp-content/uploads/2022/04/Baruch-College-CUNY-Logo.png" alt="Baruch College" className="baruchcollege" />
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="app__project"> 
                <div className="experience_header">
                    <div className="experience_type"> Project Experience </div>
                    <div className="experience_desc"> I like to focus on a few core projects that I am passionate about over the course of many years.</div>
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