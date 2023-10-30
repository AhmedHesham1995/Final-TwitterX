import React from 'react';
import Navbar from '../components/big/navbar/navbar';
import {Container, Row,Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass,faEllipsis} from '@fortawesome/free-solid-svg-icons';
import h from '../assets/h.jpg';
import Premium from '../components/small/premium';
import Follow from '../components/small/follow';
import ExploreComp from '../components/small/exploreComp';
import FollowParent from '../components/medium/followParent';
const Explore = () => {
    return (
        <section className="home">
            <Row>
                <Col sm={12} md={2}>
                    {/* Navbar section */}
                    <Navbar />
                </Col>
                <Col sm={11} md={6} className="test">
                <section className="center">
                    <div className="center__header">
                        <div className="right__search">
                        <div><FontAwesomeIcon icon={faMagnifyingGlass} className="right-search-icon" /></div>
                        <input type="search" placeholder="Search" />
                        </div>
                        <div className="center__header__divs">
                        <div className="left"><span>For you</span></div>
                        <div className="right"><span>Trending</span></div>
                        <div className="right"><span>News</span></div>
                        <div className="right"><span>Sports</span></div>
                        <div className="right"><span>Entertainment</span></div>
                        </div>
                    </div>

                    {/* Trending items */}
                    <ExploreComp trend="#اعصار__دانيال" country="Trending in Egypt" posts="58.4K Posts"/>
                    <ExploreComp trend="#اعصار__دانيال" country="Trending in Egypt" posts="58.4K Posts"/>
                    <ExploreComp trend="#اعصار__دانيال" country="Trending in Egypt" posts="58.4K Posts"/>
                    <ExploreComp trend="#اعصار__دانيال" country="Trending in Egypt" posts="58.4K Posts"/>
                    

                    

                    {/* Repeat the above Trending item structure for additional items */}
                    
                    </section>

                </Col>
                <Col md={4}>
                <section className="right">
                <Premium/>

                <div className="right__container">
                    <FollowParent/>


                    

                    {/* Repeat the above "Who to follow" structure for additional items */}
                </div>
                </section>
                </Col>

            </Row>
        </section>
    );
}

export default Explore;
