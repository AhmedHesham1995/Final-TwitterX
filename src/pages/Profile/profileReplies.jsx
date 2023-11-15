

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp , faEllipsisV,} from "@fortawesome/free-solid-svg-icons";

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
          <div className="center__post__bottom">
            <span
              className="center__post__bottom-span">
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











