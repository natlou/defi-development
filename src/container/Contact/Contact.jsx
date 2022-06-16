import React from 'react';
import { AppWrap } from '../../wrapper';
import './Contact.scss';
import '../Experience/Experience.scss';

const Contact = () => {

  return (
    <div className="app__contact">
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>
        <div className="contact_header"><div className="experience_header"><div className="experience_type">Contact Me</div></div></div>
        <ul>
            <li><a href="mailto: natlou@g.ucla.edu"><span><i class="fa-solid fa-envelope"></i></span>Email</a></li>
            <li><a href="https://www.linkedin.com/in/nathanlou/" target="_blank" rel="noreferrer"><span><i className="fa-brands fa-linkedin"></i></span>LinkedIn</a></li>    
            <li><a href="https://github.com/natlou" target="_blank" rel="noreferrer"><span><i class="fa-brands fa-github"></i></span>Github</a></li>
            <li><a href="https://www.youtube.com/channel/UC3GulQFCOr-4Fllh_d6LylQ" target="_blank" rel="noreferrer"><span><i className="fa-brands fa-youtube"></i></span>Youtube</a></li>
        </ul>
    </div>
  );
};

export default AppWrap(
  Contact,
  'contact',
  'app__secondarybg',
);