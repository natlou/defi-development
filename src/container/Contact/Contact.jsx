import { AppWrap} from '../../wrapper';
import './Contact.scss';

const Contact = () => {

  return (
    <div className="app__contact">
        <ul>
            <li><a href="#"><span><i className="fab fa-linkedin-f"></i></span>LinkedIn</a></li>
            <li><a href="#"><span><i className="fab fa-youtube-f"></i></span>Youtube</a></li>
            <li><a href="#"><span><i className="fab fa-github-f"></i></span>Github</a></li>
            <li><a href="#"><span><i className="fab fa-email-f"></i></span>Email</a></li>
        </ul>
    </div>
  );
};

export default AppWrap(
  Contact,
  'contact',
  'app__secondarybg',
);