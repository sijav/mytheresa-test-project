import {lazy} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

const Home = lazy(() =>
  import(
    /* webpackChunkName: "Home" */
    'src/pages/home/HomePage'
  )
);

const Movie = lazy(() =>
  import(
    /* webpackChunkName: "Movie" */
    'src/pages/movie/MoviePage'
  )
);

const NotFound = lazy(() =>
  import(
    /* webpackChunkName: "NotFound" */
    'src/pages/not-found/NotFoundPage'
  )
);

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element={<Movie />}></Route>
      <Route path="/404" element={<NotFound />}></Route>
      <Route path="*" element={<Navigate to="404" />} />
    </Routes>
  );
}
