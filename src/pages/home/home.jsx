
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
//   const [newPostContent, setNewPostContent] = useState('');
//   const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();

//   // Function to handle posting a new post
//   const handlePost = async () => {
//     try {
//       // Perform the API call to post a new post
//       const response = await fetch('http://localhost:4005/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           content: newPostContent,
//           // Add any other necessary fields
//         }),
//       });

//       if (response.ok) {
//         // Clear the input and fetch the updated posts
//         setNewPostContent('');
//         fetchPosts();
//       } else {
//         console.error('Failed to post new post');
//       }
//     } catch (error) {
//       console.error('Error posting new post:', error.message);
//     }
//   };

//   // Function to handle fetching posts
//   const fetchPosts = async () => {
//     try {
//       // Perform the API call to fetch posts
//       const response = await fetch('http://localhost:4005/posts'); // Adjust the URL based on your backend setup
//       const data = await response.json();
//       setPosts(data);
//     } catch (error) {
//       console.error('Error fetching posts:', error.message);
//     }
//   };

//   // Fetch posts when the component mounts
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={h} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPostContent}
//             onChange={(e) => setNewPostContent(e.target.value)}
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
//         // <Posts
//         //   key={post._id}
//         //   name={post.name}
//         //   username={post.username}
//         //   date={post.date}
//         //   content={post.content}
//         //   img={post.img}
//         // />
//         <Posts key={post._id} content={post.title} img={h}/>
//       ))}
//     </section>
//   );
// };

// export default Home;










import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/big/navbar/navbar';
import h from '../../assets/h.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Premium from '../../components/small/premium';
import Posts from '../../components/small/posts';
import HappenParent from '../../components/medium/happenParent';
import FollowParent from '../../components/medium/followParent';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [newPostContent, setNewPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handlePost = async () => {
    try {
      console.log('Posting:', newPostContent);

      const response = await axios.post('http://localhost:4005/posts', {
        content: newPostContent,
      });

      console.log('Response:', response.data);

      if (response.status === 201) {
        setNewPostContent('');
        fetchPosts();
      } else {
        console.error('Failed to post new post');
      }
    } catch (error) {
      console.error('Error posting new post:', error.message);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4005/posts'); 
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section>
      <div className="center__happen">
        <div className="center__happen__top">
          <img src={h} alt="" />
          <input
            type="text"
            placeholder="What's happening?!"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
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
        <Posts
          key={post._id}
          username="@ahmed10_hesham" 
          name="Ahmed Hesham"
          date="Jun 27"
          content={post.title}
          img={h}
        />
      ))}
    </section>
  );
};

export default Home;
