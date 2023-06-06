import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TuitStats from "./tuit-stats";
const TuitItem = ({
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
    <li className="list-group-item">
      <div className="row">
        <div className="col-2 text-center">
          <img
            width={70}
            className="text-center mt-2 rounded-3 img-fluid"
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-10">
          <div>
            <span class="fw-bolder small">{tuit.userName}</span> 
            <i class="fa-solid fa-circle-check "></i> 
            <FontAwesomeIcon icon={faCircleCheck} className="wd-verified-icon ms-1 me-1 text-primary" />
            <span class="small">{tuit.handle} . {tuit.time}</span>
          </div>
          <div class="small">{tuit.tuit}</div>

          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
