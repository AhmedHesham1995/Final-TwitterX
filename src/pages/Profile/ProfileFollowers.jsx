import React, { useState, useEffect } from "react";
import axios from "axios";
import './ProfileFollow-ers-wing.css';

const ProfileFollowers = () => {
    const userId = localStorage.getItem('ID');
    const token = localStorage.getItem('token');
    const [followers, setFollowers] = useState([]);
    const [showfollow, setShowFollow] = useState(true);


    useEffect(() => {
        const fetchFollowers = async () => {
            try {
                const response = await axios.get(`http://localhost:4005/users/${userId}/followers`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const followersWithIds = response.data.followers.map(user => ({ ...user, loggedInUserId: userId }));
                setFollowers(followersWithIds);
                console.log(response);
            } catch (error) {
                console.error('Error fetching followers:', error.message);
            }
        };
        fetchFollowers();
    }, [userId, token]);

    const handleFollow = async (followedUserId) => {
        try {
            await axios.put(
                `http://localhost:4005/users/follow/${followedUserId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setShowFollow(false);

        } catch (error) {
            console.error('Error following user:', error.message);
        }
    };

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
            setShowFollow(true);

        } catch (error) {
            console.error('Error unfollowing user:', error.message);
        }
    };

    return (
        <div>

            <h2
                className="fo-head"
            >Followers: </h2>
            <div
            >
                <ul
                    className="user-followers"

                >
                    {followers && followers.map((follower) => (
                        <li
                            className="user-every-follower"
                            key={follower._id}
                        >
                            <span className="user-name-photo">
                                <img
                                    className="user-imgge"
                                    src={follower.profilePicture}
                                />
                                <span className="followedUser">
                                    {follower.name}
                                </span>
                            </span>

                            {showfollow ? (
                                <button
                                    style={{ margin: "10px" }}
                                    className="btn btn-primary "
                                    onClick={() => handleFollow(follower._id)}

                                >
                                    Follow
                                </button>
                            ) : (
                                <button
                                    style={{ margin: "10px" }}
                                    className="btn btn-danger "
                                    onClick={() => handleUnfollow(follower._id)}
                                >
                                    Unfollow
                                </button>
                            )}

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfileFollowers;
