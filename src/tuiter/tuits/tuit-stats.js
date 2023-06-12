import React from "react";
import {
  faRetweet,
  faHeart as faSolidHeart,
  faThumbsDown as faSolidThumbsDown,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faHeart, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
                 picks up the Curiosity rover on its 6' bed`,
    image: "bootstrap.png",
  },
}) => {
  const dispatch = useDispatch();
  const toggleTuitLike = (tuit) => {
    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }));
  };
  const toggleTuitDislike = (tuit) => {
    dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }));
  };
  return (
    <div class="d-flex justify-content-between mt-2">
      <div class="small">
        <FontAwesomeIcon icon={faComment} className="me-1" />
        {tuit.replies}
      </div>
      <div class="small">
        <FontAwesomeIcon icon={faRetweet} className="me-1" />
        {tuit.retuits}
      </div>
      <div class="small">
        <a
          href="#"
          class="text-decoration-none"
          onClick={() => toggleTuitLike(tuit)}
        >
          <FontAwesomeIcon
            icon={tuit.likes > 0 ? faSolidHeart : faHeart}
            className={tuit.likes > 0 ? "wd-font-heart me-1" : "me-1"}
          />
        </a>
        {tuit.likes}
      </div>
      <div class="small">
        <a
          href="#"
          class="text-decoration-none"
          onClick={() => toggleTuitDislike(tuit)}
        >
          <FontAwesomeIcon
            icon={tuit.dislikes > 0 ? faSolidThumbsDown : faThumbsDown}
            className={tuit.dislikes > 0 ? "me-1" : "me-1"}
          />
        </a>
        {tuit.dislikes}
      </div>
      <div class="small">
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="me-1" />
      </div>
    </div>
  );
};
export default TuitStats;
