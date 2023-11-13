
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












import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/big/navbar/navbar';
import h from '../../assets/h.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Premium from '../../components/small/premium';
import Posts from '../../components/small/posts';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4005/posts');
      console.log(response.data);
      setPosts(response.data.reverse());
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async () => {
    try {
      await axios.post('http://localhost:4005/posts', {
        title: newPost,
      });

      setNewPost('');
      fetchPosts();
    } catch (error) {
      console.error('Error', error.message);
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
        <Posts
          key={post._id}
          username="@ahmed10_hesham"
          name="Ahmed Hesham"
          date="Jun 27"
          content={post.title}
          img={post.userProfilePicture}
        />
      ))}
    </section>
  );
};

export default Home;







