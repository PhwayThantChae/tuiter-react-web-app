import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHashtag, faBell, faHouse, faEnvelope, faBookmark, faList, faUser, faEllipsis } from '@fortawesome/free-solid-svg-icons';

library.add(faHashtag, faBell, faHouse, faEnvelope, faBookmark, faList, faUser, faEllipsis)

const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const linkss = ["home", "explore", "notifications", "messages", 
 "bookmarks", "lists", "profile",  "more"];
 const links = [
    {
        "link": "home",
        "icon": "house"
    },
    {
        "link": "explore",
        "icon": "hashtag"
    },
    {
        "link": "notifications",
        "icon": "bell"
    },
    {
        "link": "messages",
        "icon": "envelope"
    },
    {
        "link": "bookmarks",
        "icon": "bookmark"
    },
    {
        "link": "lists",
        "icon": "list"
    },
    {
        "link": "profile",
        "icon": "user"
    },
    {
        "link": "More",
        "icon": "ellipsis"
    }
 ]
 return (
   <div className="list-group">
     {links.map((link) => 
         <Link to={`/tuiter/${link.link}`} className={`list-group-item list-group-item-action text-capitalize ${active === link.link ? "active" : ""}`}>
            <FontAwesomeIcon icon={link.icon} className="me-2" />
            <span className="d-inline d-none d-xl-inline d-xxl-inline">{link.link}</span>
         </Link>
     )}
   </div>
 );
};

export default NavigationSidebar;