// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp,faBookmark } from '@fortawesome/free-solid-svg-icons';
// import { formatDistanceToNow } from 'date-fns';

// const ProfileSaved = () => {
//     const userId = localStorage.getItem('ID');
//   const [savedPosts, setSavedPosts] = useState([]);
//   // const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);

// //   const getUser = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`);
// //       var userData = response.data.data;
// //       setUserData(userData);
// //     } catch (error) {
// //       console.error('Error get user:', error);
// //     }
// //   };

// //   getUser();

//   const fetchSavedPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${userId}/saved`);
//       setSavedPosts(response.data);
//       console.log(savedPosts);
//     } catch (error) {
//       console.error('Error fetching saved posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchSavedPosts();
//   }, [userId]);

//     const handleReplyClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const handleReply = async (postId, replyText) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, 
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
//     //   fetchRpostedPosts()
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
//     //   fetchSavedPosts()
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleSave = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-saved',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       // fetchAndSetPosts();
//       fetchSavedPosts()
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
//       {savedPosts.length === 0 ? (
//         <h1>No saved posts</h1>
//       ) : (
//         savedPosts.map((post) => (
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
//             <span className="center__post__bottom-span" onClick={() => handleSave(post._id)}>

//             <FontAwesomeIcon icon={faBookmark}
//                 style={{ color: post.saved.some(save => save.userId === localStorage.getItem("ID")) ? 'yellow' : 'gray' }}
//             />
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
// }

// export default ProfileSaved;




















import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { formatDistanceToNow } from 'date-fns';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileSaved = () => {
  const userId = localStorage.getItem('ID');
  const [savedPosts, setSavedPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    fetchSavedPosts();
  }, [userId]);

  const fetchSavedPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/posts/${userId}/saved`);
      setSavedPosts(response.data);
    } catch (error) {
      console.error('Error fetching saved posts:', error);
    }
  };

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
      fetchSavedPosts();
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
      fetchSavedPosts();
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  const handleSave = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:4005/posts/toggle-saved',
        { postId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      fetchSavedPosts();
      if (response.data.saved) {
        toast.success('Post saved successfully!');
      } else {
        toast.info('Post unsaved!');
      }
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
      <ToastContainer />
      {savedPosts.length === 0 ? (
        <h1>No saved posts</h1>
      ) : (
        savedPosts.map((post) => (
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
                  style={{ color: post.likes.some(like => like.userId === localStorage.getItem('ID')) ? 'red' : 'gray' }}
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
              <span className="center__post__bottom-span" onClick={() => handleSave(post._id)}>
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{
                    color: post.saved.some(save => save.userId === localStorage.getItem('ID')) ? 'yellow' : 'gray',
                  }}
                />
              </span>
            </div>
            {selectedPost === post._id && (
              <div>
                <div>
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
                    <div style={{ color: 'white' }} key={reply._id}>
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

export default ProfileSaved;
