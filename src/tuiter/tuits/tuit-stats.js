import React from "react";
import {
  faRetweet,
  faHeart as faSolidHeart,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <FontAwesomeIcon
          icon={tuit.liked ? faSolidHeart : faHeart}
          className={tuit.liked ? "wd-font-heart me-1" : "me-1"}
        />
        {tuit.likes}
      </div>
      <div class="small">
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="me-1" />
      </div>
    </div>
  );
};
export default TuitStats;
