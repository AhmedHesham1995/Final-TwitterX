
// import React from 'react';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { Col, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import HappenParent from '../../components/medium/happenParent';
// import FollowParent from '../../components/medium/followParent';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//     return (
//         <section>
            
//             <div className="center__happen">
//                 <div className="center__happen__top">
//                     <img src={h} alt="" />
//                     <input type="text" placeholder="what's happening?!" />
//                 </div>
//                 <div className="center__happen__bottom">
//                     <div className="center__happen__bottom-icons">
//                         <span>
//                             <FontAwesomeIcon icon={faImage} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//                         </span>
//                     </div>
//                     <button className="center__happen__bottom-btn">Post</button>
//                 </div>
//             </div>

//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//         </section>
//     );
// }

// export default Home;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4005/posts');
//       console.log(response.data);
//       setPosts(response.data.reverse());
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const handlePost = async () => {
//     try {
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       });

//       setNewPost('');
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={h} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <Posts
//           key={post._id}
//           username="@ahmed10_hesham"
//           name="Ahmed Hesham"
//           date="Jun 27"
//           content={post.title}
//           img={post.userProfilePicture}
//         />
//       ))}
//     </section>
//   );
// };

// export default Home;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4005/posts');
//       console.log(response.data);
//       setPosts(response.data.reverse());
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const handlePost = async () => {
//     try {
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       });

//       setNewPost('');
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={h} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <>
//           <div className="center__post" key={post._id}>
//         <div className="center__post__header">
//             <div className="center__post__header-left">
//                 <img src={post.userProfilePicture} alt="" />
//                 <span className="center__post__header-left__name">
//                     Ahmed
//                 </span>
//                 <span className="center__post__header-left__user">
//                     @ahmed10 . 27 june
//                 </span>
//             </div>
//             <div className="center__post__header-right">
//                 <i className="fas fa-ellipsis svg"></i>
//             </div>
//         </div>
//         <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//         </div>
//         <div className="center__post__bottom">
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faHeart} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//         </div>
//     </div>
//         </>
//       ))}
//     </section>
//   );
// };

// export default Home;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4005/posts');
//       console.log(response.data);
//       setPosts(response.data.reverse());
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const handlePost = async () => {
//     try {
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       });

//       setNewPost('');
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleDeletePost = async (postId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${postId}`);
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={h} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 Ahmed
//               </span>
//               <span className="center__post__header-left__user">
//                 @ahmed10 . 27 june
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <FontAwesomeIcon
//                 icon={faEllipsisV}
//                 className="ellipsis-icon"
//                 onClick={() => handleDeletePost(post._id)}
//               />
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faHeart} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;






import h from '../../assets/h.jpg';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
import Premium from '../../components/small/premium';
import Posts from '../../components/small/posts';
import { useNavigate } from 'react-router-dom';
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';

const Home = () => {
  const [newPost, setNewPost] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts); 
  const loved = useSelector((state) => state.homeLikes);

  const fetchAndSetPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4005/posts');
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

  const handlePost = async () => {
    try {
      await axios.post('http://localhost:4005/posts', {
        title: newPost,
      });

      setNewPost('');
      fetchAndSetPosts();
    } catch (error) {
      console.error('Error', error.message);
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

  const isLoved = (postId) => loved.includes(postId);

  const handleLoved = (postId) => {
    if (!isLoved(postId)) {
      dispatch(addToLikes(postId));
    } else {
      dispatch(removeFromLikes(postId));
    }
  };

  return (
    <section>
      <div className="center__happen">
        <div className="center__happen__top">
          <img src={h} alt="" />
          <input
            type="text"
            placeholder="What's happening?!"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
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
          <button className="center__happen__bottom-btn" onClick={handlePost}>
            Post
          </button>
        </div>
      </div>

      {posts.map((post) => (
        <div className="center__post" key={post._id}>
          <div className="center__post__header">
            <div className="center__post__header-left">
              <img src={post.userProfilePicture} alt="" />
              <span className="center__post__header-left__name">
                Ahmed
              </span>
              <span className="center__post__header-left__user">
                @ahmed10 . 27 june
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
            <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
              <FontAwesomeIcon icon={faComment} />
            </span>
            <span className="center__post__bottom-span">
              <FontAwesomeIcon icon={faRetweet} />
            </span>
            <span className="center__post__bottom-span">
            <FontAwesomeIcon
                onClick={() => handleLoved(post._id)}
                style={{ color: isLoved(post._id) ? 'red' : 'gray' }}
                icon={faHeart}
              />
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
              {Array.isArray(replies) && replies.map((reply) => (
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

export default Home;







/*love*/
