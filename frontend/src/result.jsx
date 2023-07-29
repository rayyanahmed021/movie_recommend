
import React from "react";
import './result.css';

export default function Result(props) {
  const { movies } = props;
  

  return (
    // <div className="card-list">
    <div className="card-list-container" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>

      {movies && movies.length > 0 ? (
        movies.map((item, index) => (
          <div className="card" key={index}>
            <img
              className="card--image"
              style={{ width: "300px", height: "450px" }}
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.title}            />
            <div className="card--details" style={{width:"300px"}}>
              <h2 className="card--title">{item.title}</h2>
              <p className="card--rating">Rating: {item.vote_average}</p>
            </div>
          </div>
        ))
      ): ""}
    </div>
  );
}


// const Box = (props) => {
//   const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//   const { image, title, rating } = props;

//   return (
//     <div className="shadow min-h-[200px] border border-black mt-3">
//       <img src={IMGPATH + image} alt="" className="w-full" />
//       <div className="flex justify-between px-2 items-center">
//         <div className="flex flex-grow items-center">
//           <span className="text-2xl flex-grow-0">{title}</span>
//         </div>
//         <span className="text-xl text-yellow-500 font-bold">{rating}</span>
//       </div>
//     </div>
//   );
// };
