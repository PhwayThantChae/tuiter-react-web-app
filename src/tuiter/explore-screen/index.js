import React from "react";
import TuitSummaryList from "../tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
function ExploreScreen() {
 return(
   <>
     <div className="row">
       <div className="col-md-11 col-sm-8 col-10 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <AiOutlineSearch className="fs-3 position-absolute   
                       wd-nudge-up"/>
       </div>
       <div className="col-md-1 col-sm-4 col-2">
         <GoGear className="wd-top-4 float-end
                       fs-2 position-relative"/>
       </div>
     </div>
     <ul className="nav nav-pills mb-2 mt-2">
       <li className="nav-item">
         <a className="nav-link active">For You</a>
       </li>
       <li className="nav-item">
         <a className="nav-link">Trending</a>
       </li>
       <li className="nav-item">
         <a className="nav-link">News</a>
       </li>
       <li className="nav-item">
         <a className="nav-link">Sports</a>
       </li>
       <li className="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
         <a className="nav-link">Entertainment</a>
       </li>
     </ul>
     <div className="position-relative mb-2">
       <img src="/images/corgi.jpg" className="w-100"/>
       <h1 className="position-absolute wd-nudge-up text-white">
         SpaceX Starship</h1>
     </div>
     <TuitSummaryList/>
   </>
 );
};
export default ExploreScreen;