
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
        <section className="home">
            {/* <Container> */}
                <Row>
                    <Col sm={12} md={2}>
                        {/* Navbar section */}
                        <Navbar />
                    </Col>
                    <Col sm={12} md={6} className="test">
                        {/* Home content section */}
                        <section className="center">
                            <div className="center__header">
                                <h4>Home</h4>
                                <div className="center__header__divs">
                                    <div onClick={()=>{navigate('/home')}} className="left"><span>For you</span></div>
                                    <div onClick={()=>{navigate('/followings')}} className="right"><span>Following</span></div>
                                </div>
                            </div>
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
                            
                            
                            
                            
                            {/* Additional center__post items go here */}
                        </section>
                    </Col>
                    <Col md={4}>
                        <section className="right">
                            <div className="right__search">
                                <i className="fa-solid fa-magnifying-glass right-search-icon"></i>
                                <input className='s-input' type="search" placeholder="Search" />
                            </div>
                            <Premium/>
                            <div className="right__container">
                                <HappenParent/>     
                                {/* Repeat this structure for additional items in the "What's happening" section */}
                            </div>
                            <div className="right__container">
                                
                               <FollowParent/>
                                                       
        
                                {/* Repeat this structure for additional items in the "Who to follow" section */}
                            </div>
                        </section>
                    </Col>
                </Row>
            {/* </Container> */}
        </section>
    );
}

export default Home;
