import "./App.css";
import Navbar from "./component/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/userAuth/SignIn";
import SignUp from "./pages/userAuth/SignUp";
import NewsDetail from "./pages/newsDetail/NewsDetail";
import Fav from "./component/modal/Fav";
import { CostumeItemContext } from "./context/useContext.jsx";
import Grids from "./component/grid/Grids.jsx";

function App() {
  return (
    <>
      <CostumeItemContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Grids />
                  <Home />
                </>
              }
            />
            <Route
              path="/:id"
              element={
                <>
                  <NewsDetail />
                </>
              }
            />
            <Route
              path="/fav"
              element={
                <>
                  <Grids />
                  <Fav />
                </>
              }
            />
            <Route
              path="/signin"
              element={
                <>
                  <SignIn />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  <SignUp />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </CostumeItemContext>
    </>
  );
}

export default App;
