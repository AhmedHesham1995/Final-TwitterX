

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faComment, faRetweet, faHeart, faChartBar, faArrowUp , faEllipsisV,} from "@fortawesome/free-solid-svg-icons";

const ProfilePosts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [replies, setReplies] = useState([]);

  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
      var userData=response.data.data;
      console.log(userData);
      setUserData(userData)
      console.log("user");
    } catch (error) {
      console.error('Error get user:', error);
    }
  };

  getUser()

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4005/posts");
      // const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}/posts`);

      setPosts(response.data.reverse());
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchReplies = async (postId) => {
    try {
      const response = await axios.get(`http://localhost:4005/posts/${postId}`);
      setReplies(response.data.replies);
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };

  

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:4005/posts/${postId}`);
      fetchPosts();
    } catch (error) {
      console.error("Error", error.message);
    }
  };

  const handleCommentClick = (postId) => {
    setSelectedPost(postId);
    fetchReplies(postId);
  };

  return (
    <section>
      

      {posts.map((post) => (
        <div className="center__post" key={post._id}>
          <div className="center__post__header">
            <div className="center__post__header-left">
              <img src={userData && userData.profilePicture} alt="" />  
              <span className="center__post__header-left__name">{userData && userData.name}</span>
              <span className="center__post__header-left__user">
                @{userData && userData.username} . 27 june
              </span>
            </div>
            <div className="center__post__header-right">
              <FontAwesomeIcon
                icon={faEllipsisV}
                className="ellipsis-icon"
                onClick={() => handleDeletePost(post._id)}
              />
            </div>
          </div>
          <div className="center__post__body">
            <span className="center__post__body__content">{post.title}</span>
          </div>
          <div className="center__post__bottom">
            <span
              className="center__post__bottom-span"
              onClick={() => handleCommentClick(post._id)}
            >
              <FontAwesomeIcon icon={faComment} />
            </span>
            <span className="center__post__bottom-span">
              <FontAwesomeIcon icon={faRetweet} />
            </span>
            <span className="center__post__bottom-span">
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className="center__post__bottom-span">
              <FontAwesomeIcon icon={faChartBar} />
            </span>
            <span className="center__post__bottom-span">
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </div>
          {selectedPost === post._id && (
            <div>
              {Array.isArray(replies) &&
                replies.map((reply) => (
                  <div key={reply._id}>
                    <span>{reply.text}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProfilePosts;
