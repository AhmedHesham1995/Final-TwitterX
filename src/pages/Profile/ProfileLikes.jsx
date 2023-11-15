

import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromLikes } from '../../store/slices/homeLikes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ProfileLikes = () => {
  const loved = useSelector((state) => state.homeLikes);
  const posts = useSelector((state) => state.posts.posts); 

  const dispatch = useDispatch();

  const handleRemove = (postId) => {
    dispatch(removeFromLikes(postId));
  };

  return (
    <>
      {loved.length === 0 ? (
        <h1>empty</h1>
      ) : (
        loved.map((postId) => {
          const post = posts.find((p) => p._id === postId); 

          if (!post) {
            
            return null;
          }

          return (
            <div className="center__post" key={post._id}>
              <div className="center__post__header">
                <div className="center__post__header-left">
                  <img src={post.userProfilePicture} alt="" />
                  <span className="center__post__header-left__name">
                    Ahmed
                  </span>
                  <span className="center__post__header-left__user">
                    @ahmed . 20Jun
                  </span>
                </div>
                <div className="center__post__header-right">
                  <i className="fas fa-ellipsis svg"></i>
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
          );
        })
      )}
    </>
  );
};

export default ProfileLikes;




