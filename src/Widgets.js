import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberNewIcon from '@mui/icons-material/FiberNew';
 function Widgets() {
  


  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News  <InfoIcon /></h2>
    
      </div>
       <div className="article__header">
         <ul>
             <li><h4>BlackRock is back </h4>
               <p>Black rock grossed over 100%</p>
             </li>
             <li><h4>Elon Musk take rest </h4>
               <p>He retired as the ceo of the Tesla </p>
             </li>
             <li><h4>Jp morgan is hiring  </h4>
               <p>100 vacancies for the software Devloper </p>
             </li>
             <li><h4>Narendra Modi visit to the Australia </h4>
               <p>The Australia is giving big deal to the india</p>
             </li>
             
             <li><h4>Dwebpixel is hiring  </h4>
               <p>20 vacancy for the software Devloper </p>
             </li>
             
             <li><h4>Google become largest It companires </h4>
               <p>100 years of the Google Completed </p>
             </li>
             

         </ul>
         
         </div>
  
    </div>
  );
}

export default Widgets;