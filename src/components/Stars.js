import { BsFillStarFill, BsStar } from "react-icons/bs";

function Stars({ starsCount }) {
 return (
  <div>
   {Array.from({ length: 5 }, (_, index) => {
    return (
     <span key={index}>
      {starsCount >= index + 1 ? <BsFillStarFill /> : <BsStar />}
     </span>
    );
   })}
  </div>
 );
}

export default Stars;
