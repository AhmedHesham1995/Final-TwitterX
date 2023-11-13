// import React from "react";
// import { Post } from "../../components/small/Links";

// const ProfileReplies = () => {
//   return (
//     <div>
//       <Post text="وَأَن لَّيْسَ لِلْإِنسَـٰنِ إِلَّا مَا سَعَىٰ" />
//       <Post
//         text="
//                     اللهم إني أتبرأ من حولي وقوتي، وألتجئ إلى حولك وقوّتك، اللهم
//                     أعنِّي ولا تُعِن عليَّ، وانصرني ولا تنصر عليَّ، واهدني
//                     ويسِّر الهُدى لي 🌿"
//       />
//     </div>
//   );
// };

// export default ProfileReplies;









// import React, { useState, useEffect } from "react";
// import { Post } from "../../components/small/Links";
// import axios from "axios";

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

//   return (
//     <div>
//       {replies.map((reply) => (
//         <Post key={reply._id} text={reply.text}  />
//       ))}
//     </div>
//   );
// };

// export default ProfileReplies;






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Post } from "../../components/small/Links";

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
//       // Make a DELETE request to your server to delete the reply
//       await axios.delete(`http://localhost:4005/posts/${replyId}`);

//       // Update the state to remove the deleted reply
//       setReplies((prevReplies) =>
//         prevReplies.filter((reply) => reply._id !== replyId)
//       );
//     } catch (error) {
//       console.error("Error deleting reply:", error.message);
//     }
//   };

//   return (
//     <div>
//       {replies.map((reply) => (
//         <div key={reply._id}>
//           <Post text={reply.text} />
//           <button onClick={() => handleDeleteReply(reply._id)}>
//             Delete Reply
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProfileReplies;






import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import h from '../../assets/h.jpg';

const ProfileReplies = () => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await axios.get("http://localhost:4005/posts");
        const allReplies = response.data.reduce(
          (acc, post) => acc.concat(post.replies),
          []
        );
        setReplies(allReplies.reverse());
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

  return (
    <div>
      {replies.map((reply) => (
        <div key={reply._id} className="center__post">
          <div className="center__post__header">
            <div className="center__post__header-left">
              <img src={h} alt="" />
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
                onClick={() => handleDeleteReply(reply._id)}
              />
            </div>
          </div>
          <div className="center__post__body">
            <span className="center__post__body__content">{reply.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileReplies;
