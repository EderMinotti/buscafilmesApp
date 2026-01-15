import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { MoviesSearch } from "../Pages/MoviesSearch";
import { MoviesDetails } from "../Pages/MoviesDetails";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { MoviesHome } from "../Pages/MoviesHome";
import { LikedMovies } from "../components/LikedMovies";
import { DislikedMovies } from "../components/DislikedMovies";
import { LaterMovies } from "../components/LaterMovies";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        
        <Route path="/auth/home" element={
          <ProtectedRoute>
            <MoviesHome />
          </ProtectedRoute>
          }></Route>
        <Route path="/auth/search" element={
          <ProtectedRoute>
            <MoviesSearch />
          </ProtectedRoute>
          }></Route>
        <Route path="/auth/details/:id" element={
          <ProtectedRoute>
            <MoviesDetails />
          </ProtectedRoute>
          }></Route>
        <Route path="/auth/liked" element={
          <ProtectedRoute>
            <LikedMovies />
          </ProtectedRoute>
          }></Route>
        <Route path="/auth/disliked" element={
          <ProtectedRoute>
            <DislikedMovies/>
          </ProtectedRoute>
          }></Route>
        <Route path="/auth/later" element={
          <ProtectedRoute>
            <LaterMovies/>
          </ProtectedRoute>
          }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
