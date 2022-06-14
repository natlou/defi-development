import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Experience.scss';

const Experience = () => {

    return (
        
        <div className="app__experience">
            <motion.div className="app__professional">
                <div className="experience_header">
                    Professional Experience
                </div>
            </motion.div>
            <div className="app__project"> 
                <div className="experience_header">
                    project experience
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