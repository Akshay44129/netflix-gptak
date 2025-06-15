import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import GptSearchBar from "./GptSearchBar";
import MovieDetails from "./MovieDetails";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/search",
      element: <GptSearchBar />, 
    },{
    path: "/movie/:movieId",
    element: <MovieDetails />,
  }
    
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;