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









import React, { useState, useEffect } from "react";
import { Post } from "../../components/small/Links";
import axios from "axios";

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

  return (
    <div>
      {replies.map((reply) => (
        <Post key={reply._id} text={reply.text}  />
      ))}
    </div>
  );
};

export default ProfileReplies;




