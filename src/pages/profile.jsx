import React from "react";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaChartSimple,
  FaArrowUpFromBracket,
} from "react-icons/fa6";
import "./profile.css";
import { Post } from "../components/medium/Links";
import Navbar from "../components/big/navbar/navbar";
import images from "../assets/images.jpeg";
import quran from "../assets/quran.jpg";
import { Col, Container, Row } from "react-bootstrap";

import FollowPages from "../components/medium/followPages";
import ExploreComp from "../components/small/exploreComp";
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
                <br/>
                <h7> 326 Followin 428 Followers</h7>
          
              </div>
              <div className="edit-profile">
                <button>Edit profile</button>
              </div>
            </div>
            <div className="activities">
              <span>Posts</span>
              <span>Replies</span>
              <span>Hightlights</span>
              <span>Media</span>
              <span> Likes</span>
            </div>
            <hr />
            <Post
              text="رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ
                    عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي "
            />
            <Post
              text="
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا
                    تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ
                    وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ
                    إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا
                    خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا
                    بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ
                    وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ"
            />

            <div className="posts">
              <div className="posts-top">
                <div className="pic">
                  <img src={images} alt="" />
                </div>
                <div className="content">
                  <div className="name">Boo</div>
                  <div className="tweet">
                    <img
                      className="picquran"
                      src={quran}
                      style={{ width: "400px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="posts-bottom">
                <span>
                  <FaRegComment />
                </span>
                <span>
                  <FaRetweet />
                </span>
                <span>
                  <FaRegHeart />
                </span>
                <span>
                  <FaChartSimple />
                </span>
                <span>
                  <FaArrowUpFromBracket />
                </span>
              </div>
              <hr />
            </div>

            <Post text="وَأَن لَّيْسَ لِلْإِنسَـٰنِ إِلَّا مَا سَعَىٰ" />
            <Post
              text="
                    اللهم إني أتبرأ من حولي وقوتي، وألتجئ إلى حولك وقوّتك، اللهم
                    أعنِّي ولا تُعِن عليَّ، وانصرني ولا تنصر عليَّ، واهدني
                    ويسِّر الهُدى لي 🌿"
            />
            <Post
              text="اللهُم حقّق لي ما أُريد فأنت تعلم السِر وَ ما يخفي ، اللهُمَ
                    فوضتك أمري كُله فجمّله خيراً بما شِئت و إجعلني يارب ممن نظرت
                    إليه فرحمته و سمعت دُعائه فأجبته"
            />
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
