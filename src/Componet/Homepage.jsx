import {React,useEffect,useState} from "react";
import {Link} from "react-router-dom"
import "./Homepage.css"
export const Homepage=()=>{
const [movie,setmovie]=useState([])

useEffect(()=>{
const getmovie=async()=>{
  
  
    try {
        let res=await fetch(`http://localhost:8080/movies`)
        let data=await res.json()
        setmovie(data)
       
    } catch (error) {
        console.log(error)
      
    }
}
getmovie()
},[])
// console.log(movie)


    return (
       <>
       {movie.map((e)=>(
        <div key={e.id} className="Movie_container">
      <img src={e.poster_path} alt="" className="movie_image" />
      <p >{e.original_title}</p>
<button> <Link to={`/${e.id}`}>More Details</Link></button>
        </div>
       ))}
       </>
    )
}