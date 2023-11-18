

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
import { useNavigate } from "react-router-dom";
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp , faEllipsisV,} from "@fortawesome/free-solid-svg-icons";
import { formatDistanceToNow } from 'date-fns';

const ProfilePosts = () => {
  const [newPost, setNewPost] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [replies, setReplies] = useState([]);

  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const Allposts = useSelector((state) => state.posts.posts); 
console.log(Allposts);

  const posts = Allposts.filter((p) => p.userId && p.userId._id == localStorage.getItem("ID"));

  


  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
      var userData=response.data.data;
      // console.log(userData);
      setUserData(userData)
      // console.log("user");
    } catch (error) {
      console.error('Error get user:', error);
    }
  };

  getUser()


  const fetchAndSetPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/posts`);
      // const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}/posts`);
      console.log(localStorage.getItem("ID"));
      dispatch(setPostsAction(response.data.reverse()));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchAndSetPosts();
  }, []);


 
  const fetchReplies = async (postId) => {
    try {
      const response = await axios.get(`http://localhost:4005/posts/${postId}`);
      setReplies(response.data.replies);
    } catch (error) {
      console.error('Error fetching replies:', error);
    }
  };

  // const handlePost = async () => {
  //   try {
  //     await axios.post('http://localhost:4005/posts', {
  //       title: newPost,
  //     });

  //     setNewPost('');
  //     fetchAndSetPosts();
  //   } catch (error) {
  //     console.error('Error', error.message);
  //   }
  // };


  const handlePost = async () => {
    try {
      // Get the JWT token from your authentication system (e.g., localStorage)
      const token = localStorage.getItem('token'); // Replace with your actual token retrieval method
  
      // Make the POST request with the JWT token in the Authorization header
      await axios.post('http://localhost:4005/posts', {
        title: newPost,
      }, {
        headers: {
          Authorization: token,
        },
      });
  
      setNewPost('');
      fetchAndSetPosts();
    } catch (error) {
      console.error('Error', error.message);
      // Handle the error, e.g., display an error message to the user
    }
  };
  

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:4005/posts/${postId}`);
      fetchAndSetPosts();
    } catch (error) {
      console.error('Error', error.message);
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
              @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
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
