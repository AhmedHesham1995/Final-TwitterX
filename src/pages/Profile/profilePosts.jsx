// import React from "react";
// import { Post } from "../../components/small/Links";
// import images from "../../assets/images.jpeg";
// import quran from "../../assets/quran.jpg";
// import {
//     FaRegComment,
//     FaRetweet,
//     FaRegHeart,
//     FaChartSimple,
//     FaArrowUpFromBracket,
//   } from "react-icons/fa6";
// const ProfilePosts = () => {
//   return (
//     <div>
//       <Post
//         text="رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ
//                     عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي "
//       />
//       <Post
//         text="
//                     اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا
//                     تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ
//                     وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ
//                     إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا
//                     خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا
//                     بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ
//                     وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ"
//       />

//       <div className="posts">
//         <div className="posts-top">
//           <div className="pic">
//             <img src={images} alt="" />
//           </div>
//           <div className="content">
//             <div className="name">Boo</div>
//             <div className="tweet">
//               <img
//                 className="picquran"
//                 src={quran}
//                 style={{ width: "400px" }}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="posts-bottom">
//           <span>
//             <FaRegComment />
//           </span>
//           <span>
//             <FaRetweet />
//           </span>
//           <span>
//             <FaRegHeart />
//           </span>
//           <span>
//             <FaChartSimple />
//           </span>
//           <span>
//             <FaArrowUpFromBracket />
//           </span>
//         </div>
//         <hr />
//       </div>

//       <Post text="وَأَن لَّيْسَ لِلْإِنسَـٰنِ إِلَّا مَا سَعَىٰ" />
//       <Post
//         text="
//                     اللهم إني أتبرأ من حولي وقوتي، وألتجئ إلى حولك وقوّتك، اللهم
//                     أعنِّي ولا تُعِن عليَّ، وانصرني ولا تنصر عليَّ، واهدني
//                     ويسِّر الهُدى لي 🌿"
//       />
//       <Post
//         text="اللهُم حقّق لي ما أُريد فأنت تعلم السِر وَ ما يخفي ، اللهُمَ
//                     فوضتك أمري كُله فجمّله خيراً بما شِئت و إجعلني يارب ممن نظرت
//                     إليه فرحمته و سمعت دُعائه فأجبته"
//       />
//     </div>
//   );
// };

// export default ProfilePosts;





















// import React, { useState, useEffect } from "react";
// import { Post } from "../../components/small/Links";
// import images from "../../assets/images.jpeg";
// import def from '../../assets/user.jpg'
// import quran from "../../assets/quran.jpg";
// import {
//     FaRegComment,
//     FaRetweet,
//     FaRegHeart,
//     FaChartSimple,
//     FaArrowUpFromBracket,
//   } from "react-icons/fa6";

// const ProfilePosts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('http://localhost:4005/posts'); 
//         const data = await response.json();
//         setPosts(data.reverse());
//       } catch (error) {
//         console.error('Error fetching posts:', error.message);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post._id} className="posts">
//           <div className="posts-top">
//             <div className="pic">
//               {<img src={post.userProfilePicture} alt="" />}
//             </div>
//             <div className="content">
//               <div className="name">Boo</div>
//               <div className="tweet">
//                 {post.title}
//               </div>
//             </div>
//           </div>
//           <div className="posts-bottom">
//             <span>
//               <FaRegComment />
//             </span>
//             <span>
//               <FaRetweet />
//             </span>
//             <span>
//               <FaRegHeart />
//             </span>
//             <span>
//               <FaChartSimple />
//             </span>
//             <span>
//               <FaArrowUpFromBracket />
//             </span>
//           </div>
//           <hr />
//         </div>
//       ))}

//       {/* <Post
//         text="رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ ..."
//       /> */}
//     </div>
//   );
// };

// export default ProfilePosts;







import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEllipsisV,} from '@fortawesome/free-solid-svg-icons';
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';



const ProfilePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4005/posts");
        setPosts(response.data.reverse());
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:4005/posts/${postId}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  };

  return (
    <div className="center__happen">
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

export default ProfilePosts;






