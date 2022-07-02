import React from "react";
import { useParams } from "react-router-dom";

export const MoviesDetails = () => {
  const { movieid } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [movieDetails, setmoveiDetails] = React.useState({});

  // basis this id: a network

  React.useEffect(() => {
    let isSubscribed = true;
    setIsLoading(true);
    fetch(`http://localhost:8080/movies/${movieid}`)
      .then((res) => res.json())
      .then((res) => {
        setIsError(false);
        return isSubscribed ? setmoveiDetails(res) : null;
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));

    return () => {
      isSubscribed = false;
    };
  }, [movieid]);
//   console.log(movieDetails.id)

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h1>SOMETHING WENT WRONG</h1>;
  }

  return (
    <div>
    <img src={movieDetails.poster_path} alt="" />
    <h3>Title:-{movieDetails.original_title}</h3>
    <p>ReleaseDate:-{movieDetails.release_date}</p>
    <button>Book ticket</button>
    <button>Show Booking Details</button>

    </div>
  );
};

// export default ProductDetails;


// 