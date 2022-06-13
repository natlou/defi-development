import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {

    return (
        <div className='app__about'>
          
          <motion.img 
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            className='app__about-warp' src="https://raydium.io/backgroundImages/home-bg-element-1.webp"/>
        </div>
      );
}

export default AppWrap(
    MotionWrap(About),
    'about',
    'app__darkbg',
);