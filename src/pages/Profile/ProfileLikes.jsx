

// import React from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromLikes } from '../../redux/slices/homeLikes';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// const ProfileLikes = () => {
//   const loved = useSelector((state) => state.homeLikes);
//   const posts = useSelector((state) => state.posts.posts); 

//   const dispatch = useDispatch();

//   const handleRemove = (postId) => {
//     dispatch(removeFromLikes(postId));
//   };

//   return (
//     <>
//       {loved.length === 0 ? (
//         <h1>empty</h1>
//       ) : (
//         loved.map((postId) => {
//           const post = posts.find((p) => p._id === postId); 

//           if (!post) {
            
//             return null;
//           }

//           return (
//             <div className="center__post" key={post._id}>
//               <div className="center__post__header">
//                 <div className="center__post__header-left">
//                   <img src={post.userProfilePicture} alt="" />
//                   <span className="center__post__header-left__name">
//                     {post.userId && post.userId.name}
//                   </span>
//                   <span className="center__post__header-left__user">
//                     @{post.userId && post.userId.username}
//                   </span>
//                 </div>
//                 <div className="center__post__header-right">
//                   <i className="fas fa-ellipsis svg"></i>
//                 </div>
//               </div>
//               <div className="center__post__body">
//                 <span className="center__post__body__content">{post.title}</span>
//               </div>
//               <div className="center__post__bottom">
//                 <span className="center__post__bottom-span">
//                   <FontAwesomeIcon icon={faComment} />
//                 </span>
//                 <span className="center__post__bottom-span">
//                   <FontAwesomeIcon icon={faRetweet} />
//                 </span>
//                 <span className="center__post__bottom-span">
//                   <FontAwesomeIcon onClick={() => handleRemove(post._id)} icon={faHeart} />
//                 </span>
//                 <span className="center__post__bottom-span">
//                   <FontAwesomeIcon icon={faChartBar} />
//                 </span>
//                 <span className="center__post__bottom-span">
//                   <FontAwesomeIcon icon={faArrowUp} />
//                 </span>
//               </div>
//             </div>
//           );
//         })
//       )}
//     </>
//   );
// };

// export default ProfileLikes;








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromLikes } from '../../redux/slices/homeLikes';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// const ProfileLikes = () => {
//   const dispatch = useDispatch();
//   const userId = localStorage.getItem('ID');
//   const [likedPosts, setLikedPosts] = useState([]);
  
//   // useEffect(() => {
//   //   const fetchLikedPosts = async () => {
//   //     try {
//   //       const response = await axios.get(`http://localhost:4005/users/${userId}/liked-posts`);
//   //       setLikedPosts(response.data);
//   //       console.log(likedPosts);
//   //     } catch (error) {
//   //       console.error('Error fetching liked posts:', error);
//   //     }
//   //   };

//   //   fetchLikedPosts();
//   // }, [userId]);


// //   useEffect(() => {
// //     const fetchLikedPosts = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:4005/posts/${userId}/likedPosts`);
// //             setLikedPosts(response.data);
// //             console.log(likedPosts);
// //         } catch (error) {
// //             console.error('Error fetching liked posts:', error);
// //         }
// //     };

// //     fetchLikedPosts();
// // }, [userId, likedPosts]); // Include likedPosts in the dependency array

// //   const handleRemove = (postId) => {
// //     dispatch(removeFromLikes(postId));
// //   };

//   return (
//     <>
//       {likedPosts.length === 0 ? (
//         <h1>No liked posts</h1>
//       ) : (
//         likedPosts.map((post) => (
//           <div className="center__post" key={post._id}>
//             {/* Render post details */}
//             <div className="center__post__header">
//               {/* Render post header */}
//             </div>
//             <div className="center__post__body">
//               <span className="center__post__body__content">{post.title}</span>
//             </div>
//             <div className="center__post__bottom">
//               <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faComment} />
//               </span>
//               <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faRetweet} />
//               </span>
//               <span className="center__post__bottom-span">
//                 <FontAwesomeIcon onClick={() => handleRemove(post._id)} icon={faHeart} />
//               </span>
//               <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faChartBar} />
//               </span>
//               <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faArrowUp} />
//               </span>
//             </div>
//           </div>
//         ))
//       )}
//     </>
//   );
// };

// export default ProfileLikes;















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { formatDistanceToNow } from 'date-fns';

// const ProfileLikes = () => {
//   const userId = localStorage.getItem('ID');
//   const [likedPosts, setLikedPosts] = useState([]);
//   // const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   useEffect(() => {
//     const fetchLikedPosts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4005/posts/${userId}/likedPosts`);
//         setLikedPosts(response.data);
//         console.log(likedPosts);
//       } catch (error) {
//         console.error('Error fetching liked posts:', error);
//       }
//     };

//     fetchLikedPosts();
//   }, [userId]);


//   const handleReplyClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const handleReply = async (postId, replyText) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, // Replace with the correct endpoint for adding a reply
//         { text: replyText, postId, userId: localStorage.getItem('ID') },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(postId);
//     } catch (error) {
//       console.error('Error posting reply:', error.message);
//     }
//   };

//   const handleRepost = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-repost',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       // fetchAndSetPosts();
//       // fetchLikedPosts()
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleLike = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-like',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       // fetchAndSetPosts();
//       // fetchLikedPosts()
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       setReplies(response.data.replies);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   return (
//     <>
//       {likedPosts.length === 0 ? (
//         <h1>No liked posts</h1>
//       ) : (
//         likedPosts.map((post) => (
//           <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">{post.userId && post.userId.name}</span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 <i className="fas fa-ellipsis svg"></i>
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleReplyClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
//               <FontAwesomeIcon
//                 icon={faRetweet}
//                 style={{
//                   color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID'))
//                     ? 'green'
//                     : 'gray',
//                 }}
//               />
//               {post.reposts.length > 0 && post.reposts.length}
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//               <FontAwesomeIcon
//                 style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//               {post.likes.length > 0 && post.likes.length}
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 {/* Input for adding a reply */}
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={() => handleReply(selectedPost, replyText)}>Reply</button>
//               </div>
//               {Array.isArray(replies) &&
//                 replies.map((reply) => (
//                   <div style={{ color: "white" }} key={reply._id}>
//                     <span>{reply.text}</span>
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//         ))
//       )}
//     </>
//   );
// };

// export default ProfileLikes;







import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { formatDistanceToNow } from 'date-fns';

const ProfileLikes = () => {
  const userId = localStorage.getItem('ID');
  const [likedPosts, setLikedPosts] = useState([]);
  // const [newPost, setNewPost] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');

  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`);
      var userData = response.data.data;
      setUserData(userData);
    } catch (error) {
      console.error('Error get user:', error);
    }
  };

  getUser();

  const fetchLikedPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/posts/${userId}/likedPosts`);
      setLikedPosts(response.data);
      console.log(likedPosts);
    } catch (error) {
      console.error('Error fetching liked posts:', error);
    }
  };

  useEffect(() => {
    fetchLikedPosts();
  }, [userId]);

    const handleReplyClick = (postId) => {
    setSelectedPost(postId);
    fetchReplies(postId);
  };

  const handleReply = async (postId, replyText) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:4005/posts/`, 
        { text: replyText, postId, userId: localStorage.getItem('ID') },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setReplyText('');
      fetchReplies(postId);
    } catch (error) {
      console.error('Error posting reply:', error.message);
    }
  };

  const handleRepost = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:4005/posts/toggle-repost',
        { postId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // fetchAndSetPosts();
      fetchLikedPosts()
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  const handleLike = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:4005/posts/toggle-like',
        { postId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // fetchAndSetPosts();
      fetchLikedPosts()
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  const fetchReplies = async (postId) => {
    try {
      const response = await axios.get(`http://localhost:4005/posts/${postId}`);
      setReplies(response.data.replies);
    } catch (error) {
      console.error('Error fetching replies:', error);
    }
  };

  return (
    <>
      {likedPosts.length === 0 ? (
        <h1>No liked posts</h1>
      ) : (
        likedPosts.map((post) => (
          <div className="center__post" key={post._id}>
          <div className="center__post__header">
            <div className="center__post__header-left">
              <img src={post.userProfilePicture} alt="" />
              <span className="center__post__header-left__name">{post.userId && post.userId.name}</span>
              <span className="center__post__header-left__user">
                @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </span>
            </div>
            <div className="center__post__header-right">
              <span>
                <i className="fas fa-ellipsis svg"></i>
              </span>
            </div>
          </div>
          <div className="center__post__body">
            <span className="center__post__body__content">{post.title}</span>
          </div>
          <div className="center__post__bottom">
            <span className="center__post__bottom-span" onClick={() => handleReplyClick(post._id)}>
              <FontAwesomeIcon icon={faComment} />
            </span>
            <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
              <FontAwesomeIcon
                icon={faRetweet}
                style={{
                  color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID'))
                    ? 'green'
                    : 'gray',
                }}
              />
              {post.reposts.length > 0 && post.reposts.length}
            </span>
            <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
              <FontAwesomeIcon
                style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? 'red' : 'gray' }}
                icon={faHeart}
              />
              {post.likes.length > 0 && post.likes.length}
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
              <div>
                {/* Input for adding a reply */}
                <input
                  type="text"
                  placeholder="Add a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button onClick={() => handleReply(selectedPost, replyText)}>Reply</button>
              </div>
              {Array.isArray(replies) &&
                replies.map((reply) => (
                  <div style={{ color: "white" }} key={reply._id}>
                    <span>{reply.text}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
        ))
      )}
    </>
  );
};

export default ProfileLikes;

