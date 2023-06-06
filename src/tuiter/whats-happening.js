import React, {useState} from "react";
import { faImage, faFileVideo, faSmile } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const tuitClickHandler = () => {
   console.log(whatsHappening);
 }
 return (
   <div className="row">
     <div className="col-auto">
       <img src="/images/bootstrap.png" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
            <FontAwesomeIcon icon={faImage} className="me-3 small" />
            <FontAwesomeIcon icon={faFileVideo} className="me-3 small" />
            <FontAwesomeIcon icon={faChartSimple} className="me-3 small" />
            <FontAwesomeIcon icon={faSmile} className="me-3 small" />
            <FontAwesomeIcon icon={faLocationDot} className="me-3 small" />
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;