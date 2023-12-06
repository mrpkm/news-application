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
