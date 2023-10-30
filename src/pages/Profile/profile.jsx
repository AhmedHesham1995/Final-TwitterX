import React from "react";


import { Post } from "../../components/small/Links";
import Navbar from "../../components/big/navbar/navbar";
import images from "../assets/images.jpeg";

import { Col, Container, Row } from "react-bootstrap";

import FollowPages from "../../components/medium/followPages";
import ExploreComp from "../../components/small/exploreComp";
import { Outlet ,Link, NavLink } from "react-router-dom";
const Profile = () => {
  return (
    <div className="bodyprofile">
      <Row className="row">
        <Col sm={12} md={2}>
          <Navbar />
        </Col>
        <Col sm={12} md={6}
          className="center"
          style={{
            backgroundColor: "rgb(0, 0, 0)",
            border: "#c71818",
            position: "relative",
          }}
        >
          <div className="cover-pic"> </div>
          <div className="profile-name">
            <div className="profile-det">
              <img src={images} alt="" />
              <h4>Boo</h4>
              <h7>  @boo2435</h7>
              <br />
              <h7> 326 Followin 428 Followers</h7>

            </div>
            <div className="edit-profile">
              <button>Edit profile</button>
            </div>
          </div>
          <div className="activities">
          
            <NavLink   style = {({isActive}) =>{
             return (isActive) ? {color: "white" } : {color : "gray"}
          }} to = "/profile/"><span> Posts</span> </NavLink>

            <NavLink style = {({isActive}) =>{
             return (isActive) ? {color: "white" } : {color : "gray"}
          }} to = "/profile/replies"><span> Replies</span> </NavLink>

            <NavLink style = {({isActive}) =>{
             return (isActive) ? {color: "white" } : {color : "gray"}
          } } to = "/profile/highlights"><span> Hightlights</span> </NavLink>
            
            <NavLink style = {({isActive}) =>{
             return (isActive) ? {color: "white" } : {color : "gray"}
          }} to = "/profile/media"><span> Media</span> </NavLink>
            <NavLink style = {({isActive}) =>{
             return (isActive) ? {color: "white" } : {color : "gray"}
          }} to = "/profile/likes"><span> Likes</span> </NavLink>
          </div>
          <hr />
          <Outlet/>  
        </Col>

        <Col md={4}
          className="right"
          style={{ backgroundColor: "black" }}
        >
          <nav className="nav-bar">
            <div className="search-bar-container">
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
              />
            </div>
          </nav>
          <div className="right__container">
            <FollowPages />
          </div>
          <div className="youmay" style={{ backgroundColor: "#2c2c2c" }}>
            <p
              style={{
                fontSize: "xx-large",
                color: "white",
                marginLeft: "20px",
              }}
            >
              <b>What’s happening</b>
            </p>
            <ExploreComp
              trend="#اعصار__دانيال"
              country="Trending in Egypt"
              posts="58.4K Posts"
            />
            <ExploreComp
              trend="#اعصار__دانيال"
              country="Trending in Egypt"
              posts="58.4K Posts"
            />
            <ExploreComp
              trend="#اعصار__دانيال"
              country="Trending in Egypt"
              posts="58.4K Posts"
            />
            <ExploreComp
              trend="#اعصار__دانيال"
              country="Trending in Egypt"
              posts="58.4K Posts"
            />
          </div>
        </Col>
      </Row>
    
    </div>
  );
};

export default Profile;
