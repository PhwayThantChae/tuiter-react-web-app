import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHashtag,
  faBell,
  faHouse,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

library.add(
  faHashtag,
  faBell,
  faHouse,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsis
);

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const linkss = [
    "home",
    "explore",
    "notifications",
    "messages",
    "bookmarks",
    "lists",
    "profile",
    "more",
  ];
  const links = [
    {
      link: "home",
      icon: "house",
    },
    {
      link: "explore",
      icon: "hashtag",
    },
    {
      link: "notifications",
      icon: "bell",
    },
    {
      link: "messages",
      icon: "envelope",
    },
    {
      link: "bookmarks",
      icon: "bookmark",
    },
    {
      link: "lists",
      icon: "list",
    },
    {
      link: "profile",
      icon: "user",
    },
    {
      link: "More",
      icon: "ellipsis",
    },
  ];
  return (
    <div className="list-group">
      {links.map((link) =>
        link.link === "profile" && currentUser ? (
          <Link
            to={`/tuiter/${link.link}`}
            className={`list-group-item list-group-item-action text-capitalize ${
              active === link.link ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={link.icon} className="me-2" />
            <span className="d-inline d-none d-xl-inline d-xxl-inline">
              {link.link}
            </span>
          </Link>
        ) : (
          link.link !== "profile" && (
            <Link
              to={`/tuiter/${link.link}`}
              className={`list-group-item list-group-item-action text-capitalize ${
                active === link.link ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={link.icon} className="me-2" />
              <span className="d-inline d-none d-xl-inline d-xxl-inline">
                {link.link}
              </span>
            </Link>
          )
        )
      )}
      {!currentUser && (
        <Link className="btn btn-small btn-primary mt-2" to="/tuiter/login">
          {" "}
          Login{" "}
        </Link>
      )}
      {!currentUser && (
        <Link className="btn btn-small btn-primary mt-2" to="/tuiter/register">
          Register
        </Link>
      )}
    </div>
  );
};

export default NavigationSidebar;
