// import React from "react";
// import "./style.css";
// import HeaderImg from "../../images/resources.png"; // Replace with your image
// import BlogSection from "../BlogSection";
// import Needs from "../needs";
// import styled from "styled-components"
// import { BsJustify } from "react-icons/bs";
// import Workplace from "../../images/icons/Workplace.png";
// // import org-layer1 from "../../images/icons/o"
// // import img4 from "../../images/icons/org-layer1.png";
// import img5 from "../../images/slider/img-1.jpg";

// const SubscribePage = () => {
//     return (

//             <div className="resources-page">
//                 {/* <div style ={{paddingLeft: "610px"}}>
//    <img src={img4} alt="" className='org-icon-left'/>
//    </div> */}
//                 <h2 style ={{textAlign:"center",display:"Flex",justifyContent:"center",padding:"150px"}}><b>Coming Soon.....</b></h2>
//                 {/* <img src="icons\Workplace.png" alt="Image"></img> */}
//                     <div style={{marginleft:"520px"}}>

                      
//                             <img src={img5} alt="" className='org-icon-right'/>
//                         {/* <img src={Workplace} alt="Subscribe" className="Workplace-img" style={{marginleft:"520px"}}/> */}
//                         </div>

//                 </div>
                
//                 );
//                 };
                
               
//  export default SubscribePage;


// const textWrapper = styled.div`
//   font-weight: 600 !important;
//   color: #1C191E !important;
//   font-size: 52px !important;
//   line-height: 44px !important;
//   letter-spacing: 2% !important;
// // `;

import React from "react";
import "./style.css";
import img5 from "../../images/slider/img-1.jpg";

const SubscribePage = () => {
    return (
        <div className="subscribe-page">
            <div className="image-wrapper">
                <img src={img5} alt="Coming Soon" className="org-image" />

                <h2 className="coming-text">
                    <b>Coming Soon.....</b>
                </h2>
            </div>
        </div>
    );
};

export default SubscribePage;
