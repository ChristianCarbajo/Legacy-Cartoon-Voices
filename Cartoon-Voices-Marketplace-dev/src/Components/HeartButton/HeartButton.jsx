import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./HeartButton.css";


const HeartButton = ({postId}) => {

    // const [like, setLike] = useState(0),
    // [isLike, setIsLike] = useState(false),

    // onLikeButtonClick = () => {
    //     setLike(like +(isLike ? - 1 : 1));
    //     setIsLike(!isLike)
    // }


    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        getLikes();
    }, []);

    const getLikes = () => {
        axios.get(`/api/likes/${postId}`)
            .then(response => {
                setLikes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleLike = () => {
        const like = { postId: postId};

        axios.post('/api/likes/like', like)
            .then(response => {
                setLikes(likes + 1);
                setLiked(true);
            })
            .catch(error => {
                console.log(error);
            });
    };


    return (
        <div className="favHeart">
            <p>Like {likes} </p>
            <input disabled={liked} onClick={handleLike} type="checkbox" className="checkbox" id="checkbox" />
            <label for="checkbox">
                <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                        <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2"/>
                        <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>

                        <g id="grp7" opacity="0" transform="translate(7 6)">
                            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
                            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
                        </g>

                        <g id="grp6" opacity="0" transform="translate(0 28)">
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
                            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/>
                        </g>

                        <g id="grp3" opacity="0" transform="translate(52 28)">
                            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
                            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
                        </g>

                        <g id="grp2" opacity="0" transform="translate(44 6)">
                            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
                        </g>

                        <g id="grp5" opacity="0" transform="translate(14 50)">
                            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/>
                            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/>
                        </g>

                        <g id="grp4" opacity="0" transform="translate(35 50)">
                            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/>
                            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/>
                        </g>

                        <g id="grp1" opacity="0" transform="translate(24)">
                            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
                            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
                        </g>
                    </g>
                </svg>
            </label>
        </div>
    );
};


export default HeartButton;