
import React from 'react';
import Navbar from '../../components/big/navbar/navbar';
import h from '../../assets/h.jpg';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Premium from '../../components/small/premium';
import Posts from '../../components/small/posts';
import HappenParent from '../../components/medium/happenParent';
import FollowParent from '../../components/medium/followParent';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

    return (
        <section>
            
            <div className="center__happen">
                <div className="center__happen__top">
                    <img src={h} alt="" />
                    <input type="text" placeholder="what's happening?!" />
                </div>
                <div className="center__happen__bottom">
                    <div className="center__happen__bottom-icons">
                        <span>
                            <FontAwesomeIcon icon={faImage} className="happenIcon" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faSquare} className="happenIcon" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faSmile} className="happenIcon" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
                        </span>
                    </div>
                    <button className="center__happen__bottom-btn">Post</button>
                </div>
            </div>

            <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
            <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
            <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
            <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
        </section>
    );
}

export default Home;
