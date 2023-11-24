import React, { useState, useEffect } from "react";
import { Post } from "../../components/small/Links";
import Navbar from "../../components/big/navbar/navbar";
import images from "../../assets/images.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import FollowPages from "../../components/medium/followPages";
import ExploreComp from "../../components/small/exploreComp";
import { Outlet, Link, NavLink } from "react-router-dom";
import axios from "axios";
// import { useSelector } from "react-redux";
import './profile.css'


const Profile = () => {

  const [user, setuser] = useState({});

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`);
        const data = response.data.data;
        setuser(data);
        console.log(response);
      } catch (error) {
        console.log('ddd');

        console.error('Error fetching posts:', error.message);
      }
    };
    fetchuser();
  }, []);

  return (
    <div className="bodyprofile">
      <div key={user.userId}>
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
            <div >
              {user.profileCover && <img className="cover-picture" src={user.profileCover} alt="cover" />}
            </div>
            <div className="profile-name">
              <div className="profile-det">

                {user.profilePicture && <img src={user.profilePicture} alt="Profile" />}
                <h4>{user.name}</h4>
                <div className="user-profile-info-es">
                  <h6> 326 Followin 428 Followers</h6>
                  <h6>  {user.email}</h6>
                  <h6>bio: {user.bio}</h6>
                  <h6>location: {user.location}</h6>
                  <h6>birth Date: {user.birthDate}</h6>
                </div>

              </div>
              <div className="edit-profile">
              <button
                className="btn btn-dark"
              >
                <NavLink to='/editProfile' style={{color: 'white', textDecoration:'none'}}>Edit profile</NavLink>
              </button>
              </div>
            </div>
            <div className="activities">

              <NavLink style={({ isActive }) => {
                return (isActive) ? { color: "white" } : { color: "gray" }
              }} to="/profile/"><span> Posts</span> </NavLink>

              <NavLink style={({ isActive }) => {
                return (isActive) ? { color: "white" } : { color: "gray" }
              }} to="/profile/replies"><span> Replies</span> </NavLink>

              <NavLink style={({ isActive }) => {
                return (isActive) ? { color: "white" } : { color: "gray" }
              }} to="/profile/highlights"><span> Hightlights</span> </NavLink>

              <NavLink style={({ isActive }) => {
                return (isActive) ? { color: "white" } : { color: "gray" }
              }} to="/profile/media"><span> Media</span> </NavLink>
              <NavLink style={({ isActive }) => {
                return (isActive) ? { color: "white" } : { color: "gray" }
              }} to="/profile/likes"><span> Likes</span> </NavLink>
              <NavLink style={({ isActive }) => {
                return (isActive) ? { color: "white" } : { color: "gray" }
              }} to="/profile/saves"><span> Saved</span> </NavLink>
            </div>
            <hr />
            <Outlet />
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

    </div>
  );
};

export default Profile;