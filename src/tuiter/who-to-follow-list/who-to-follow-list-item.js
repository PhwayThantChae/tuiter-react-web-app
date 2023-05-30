import React from "react";
const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "bootstrap.png" },
}) => {
  return (
    <li class="list-group-item d-flex align-content-center justify-content-between align-items-start">
      <img
        class="float-start rounded-circle wd-width-48"
        src={`/images/${who.avatarIcon}`}
      />
      <div class="ms-2 flex-fill">
        <div class="fs-6 text-dark">
          <span class="fw-bold">{who.userName}</span>
          <i class="fa-solid fa-circle-check wd-verified-icon ms-1"></i>
        </div>
        <div class="wd-text-13 wd-font-grey ">@NASA</div>
      </div>
      <div class="flex-fill">
        <button
          type="button"
          class="btn btn-primary btn-sm float-end rounded-pill"
        >
          Follow
        </button>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
