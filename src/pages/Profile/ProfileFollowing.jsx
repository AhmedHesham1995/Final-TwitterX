import React, { useState, useEffect } from "react";
import axios from "axios";
import './ProfileFollow-ers-wing.css';

const ProfileFollowing = () => {
    const userId = localStorage.getItem('ID');
    const token = localStorage.getItem('token');
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        const fetchFollowing = async () => {
            try {
                const response = await axios.get(`http://localhost:4005/users/${userId}/following`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const followingWithIds = response.data.following.map(user => ({ ...user, loggedInUserId: userId }));
                setFollowing(followingWithIds);
                console.log(response);
            } catch (error) {
                console.error('Error fetching following:', error.message);
            }
        };
        fetchFollowing();
    }, [userId, token]);

    const handleUnfollow = async (unfollowUserId) => {
        try {
            await axios.put(
                `http://localhost:4005/users/unfollow/${unfollowUserId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.error('Error unfollowing user:', error.message);
        }
    };

    return (
        <div>
            <h2
            className="fo-head"
            >Following: </h2>
            <ul
                className="user-followers"
            >
                {following && following.map((followedUser) => (
                    <li
                        key={followedUser.userId}
                        className="user-every-follower"
                    >
                        <spa>
                            <img
                            className="user-imgge"

                            src={followedUser.profilePicture}
                            style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: '10px' }}
                            alt={`Profile of ${followedUser.name}`}
                        />
                        <span className="followedUser">
                            
                            {followedUser.name}
                        </span>
                        </spa>
                        
                        <button
                            className=" btn btn-danger"
                            onClick={() => handleUnfollow(followedUser._id)}
                        >
                            Unfollow
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileFollowing;