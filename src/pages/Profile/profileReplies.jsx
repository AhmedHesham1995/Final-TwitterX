

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp , faEllipsisV,} from "@fortawesome/free-solid-svg-icons";

// import h from '../../assets/h.jpg';

// const ProfileReplies = () => {
//   const [replies, setReplies] = useState([]);

//   useEffect(() => {
//     const fetchReplies = async () => {
//       try {
//         const response = await axios.get("http://localhost:4005/posts");
//         const allReplies = response.data.reduce(
//           (acc, post) => acc.concat(post.replies),
//           []
//         );
//         setReplies(allReplies.reverse());
//       } catch (error) {
//         console.error("Error fetching replies:", error);
//       }
//     };

//     fetchReplies();
//   }, []);

//   const handleDeleteReply = async (replyId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${replyId}`);
//       setReplies((prevReplies) =>
//         prevReplies.filter((reply) => reply._id !== replyId)
//       );
//     } catch (error) {
//       console.error("Error deleting reply:", error.message);
//     }
//   };


//   const [userData, setUserData] = useState(null);

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData=response.data.data;
//       console.log(userData);
//       setUserData(userData)
//       console.log("user");
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };
//   getUser()
  
  

//   return (
//     <div>
//       {replies.map((reply) => (
//         <div key={reply._id} className="center__post">
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={userData && userData.profilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {userData && userData.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{userData && userData.username} . 27 june
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <FontAwesomeIcon
//                 icon={faEllipsisV}
//                 className="ellipsis-icon"
//                 onClick={() => handleDeleteReply(reply._id)}
//               />
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{reply.text}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span
//               className="center__post__bottom-span">
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
//     </div>
//   );
// };

// export default ProfileReplies;















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp , faEllipsisV,} from "@fortawesome/free-solid-svg-icons";

// import h from '../../assets/h.jpg';

// const ProfileReplies = () => {
//   const [replies, setReplies] = useState([]);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchReplies = async () => {
//       try {
//         const response = await axios.get("http://localhost:4005/posts");
//         const allReplies = response.data.reduce(
//           (acc, post) => acc.concat(post.replies),
//           []
//         );

//         // Filter replies to show only the ones posted by the logged-in user
//         const userReplies = allReplies.reverse().filter(reply => reply.postedBy._id === localStorage.getItem("ID"));
//         setReplies(userReplies);
//       } catch (error) {
//         console.error("Error fetching replies:", error);
//       }
//     };

//     fetchReplies();
//   }, []);

//   const handleDeleteReply = async (replyId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${replyId}`);
//       setReplies((prevReplies) =>
//         prevReplies.filter((reply) => reply._id !== replyId)
//       );
//     } catch (error) {
//       console.error("Error deleting reply:", error.message);
//     }
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData=response.data.data;
//       console.log(userData);
//       setUserData(userData)
//       console.log("user");
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };
//   getUser();

//   return (
//     <div>
//       {replies.map((reply) => (
//         <div key={reply._id} className="center__post">
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={userData && userData.profilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {userData && userData.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{userData && userData.username} . 27 june
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <FontAwesomeIcon
//                 icon={faEllipsisV}
//                 className="ellipsis-icon"
//                 onClick={() => handleDeleteReply(reply._id)}
//               />
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{reply.text}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span
//               className="center__post__bottom-span">
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
//     </div>
//   );
// };

// export default ProfileReplies;








import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { formatDistanceToNow } from 'date-fns';

const ProfileReplies = () => {
  const [replies, setReplies] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await axios.get("http://localhost:4005/posts");
        const allReplies = response.data.reduce(
          (acc, post) => acc.concat(post.replies),
          []
        );

        // Filter replies to show only the ones posted by the logged-in user
        const userReplies = allReplies.reverse().filter(reply => reply.postedBy._id === localStorage.getItem("ID"));
        setReplies(userReplies);
      } catch (error) {
        console.error("Error fetching replies:", error);
      }
    };

    fetchReplies();
  }, []);

  const handleDeleteReply = async (replyId) => {
    try {
      await axios.delete(`http://localhost:4005/posts/${replyId}`);
      setReplies((prevReplies) =>
        prevReplies.filter((reply) => reply._id !== replyId)
      );
    } catch (error) {
      console.error("Error deleting reply:", error.message);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
      var userData = response.data.data;
      setUserData(userData);
    } catch (error) {
      console.error('Error get user:', error);
    }
  };
  getUser();

  return (
    <div>
      {replies.map((reply) => (
        <div key={reply._id} className="center__post">
          <div className="center__post__header">
            <div className="center__post__header-left">
              <img src={userData && userData.profilePicture} alt="" />
              <span className="center__post__header-left__name">
                {userData && userData.name}
              </span>
              <span className="center__post__header-left__user">
                @{userData && userData.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
              </span>
            </div>
            <div className="center__post__header-right">
              <span>
                {/* <FontAwesomeIcon
                  icon={faEllipsisV}
                  className="ellipsis-icon"
                  onClick={() => handleDeleteReply(reply._id)}
                /> */}
                <i onClick={()=> handleDeleteReply(reply._id)} className="fas fa-ellipsis svg" ></i>
                
              </span> 
            </div>
          </div>
          <div className="center__post__body">
            <span className="center__post__body__content">{reply.text}</span>
          </div>
          <div className="center__post__bottom">
            <span className="center__post__bottom-span">
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
        </div>
      ))}
    </div>
  );
};

export default ProfileReplies;
