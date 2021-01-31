import React from 'react';

const RenderCard = (props) => {
   const { frontImg, backImg, flipped, onClick} = props;
   const img = flipped ? frontImg : backImg;

   return (
     <div className="Card" onClick={onClick}>
       <img className="p-2 sm:p-3 md:p-4 :lg:p-6" src={img} alt="" />
     </div>
   );
 };

 export default RenderCard;
 