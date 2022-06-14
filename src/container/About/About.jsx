import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {

    return (
        <div className='app__about'>
          
          <img  className='app__about-warp' src="https://raydium.io/backgroundImages/home-bg-element-1.webp"/>
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
              but my desire to build Dapps (Decentralized Apps)
              <br></br>
              is what forced me into web development.
              <br></br>
              Since then, I have developed a strong passion for
              <br></br>
              All stages of the web development process, including:
              <br></br>
              UX/UI design, Front-end, Back-end, and DevOps.
              <br></br>
              I use web development as tool in conjunction with
              <br></br>
              math and finance to build financial applications that scale. 
              <br></br>
              Here are some of my research/development interests: 
            </div>
            <div className="content-interests">
              <div className="glass-card-teal">
                MEV - Miner Extractable Value 
                <br></br>
                <br></br>
                To get rid of arbitrage, we must arbitrage first. 
                <br></br>
                I build MEV bots to arbitrage so that I can build 
                <br></br>
                systems in the future that can reduce MEV.
              </div>
              <div className="glass-card-teal">
                Atomic Swaps 
                <br></br>
                <br></br>
                Atomic swaps and atomicity of the blockchain is 
                <br></br>
                what drew me into DeFi. I want to be involved
                <br></br>
                in the development of trustless atomic swaps.
              </div>
              <div className="glass-card-teal">
                Web Development 
                <br></br>
                <br></br>
                Web dev enables me to build DeFi applications
                <br></br>
                and defi motivates me to hone my web dev skills.
                <br></br>
                Being able to scalably build any app is my goal. 
              </div>
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