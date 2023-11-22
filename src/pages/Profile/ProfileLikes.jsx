

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








import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromLikes } from '../../redux/slices/homeLikes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ProfileLikes = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('ID');
  const [likedPosts, setLikedPosts] = useState([]);
  
  // useEffect(() => {
  //   const fetchLikedPosts = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:4005/users/${userId}/liked-posts`);
  //       setLikedPosts(response.data);
  //       console.log(likedPosts);
  //     } catch (error) {
  //       console.error('Error fetching liked posts:', error);
  //     }
  //   };

  //   fetchLikedPosts();
  // }, [userId]);


  useEffect(() => {
    const fetchLikedPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:4005/users/${userId}/liked-posts`);
            setLikedPosts(response.data);
            console.log(likedPosts);
        } catch (error) {
            console.error('Error fetching liked posts:', error);
        }
    };

    fetchLikedPosts();
}, [userId, likedPosts]); // Include likedPosts in the dependency array

  const handleRemove = (postId) => {
    dispatch(removeFromLikes(postId));
  };

  return (
    <>
      {likedPosts.length === 0 ? (
        <h1>No liked posts</h1>
      ) : (
        likedPosts.map((post) => (
          <div className="center__post" key={post._id}>
            {/* Render post details */}
            <div className="center__post__header">
              {/* Render post header */}
            </div>
            <div className="center__post__body">
              <span className="center__post__body__content">{post.title}</span>
            </div>
            <div className="center__post__bottom">
              <span className="center__post__bottom-span">
                <FontAwesomeIcon icon={faComment} />
              </span>
              <span className="center__post__bottom-span">
                <FontAwesomeIcon icon={faRetweet} />
              </span>
              <span className="center__post__bottom-span">
                <FontAwesomeIcon onClick={() => handleRemove(post._id)} icon={faHeart} />
              </span>
              <span className="center__post__bottom-span">
                <FontAwesomeIcon icon={faChartBar} />
              </span>
              <span className="center__post__bottom-span">
                <FontAwesomeIcon icon={faArrowUp} />
              </span>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ProfileLikes;
