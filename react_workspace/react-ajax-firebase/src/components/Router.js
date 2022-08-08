import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

const AppRouter = ({isLoggedIn, onLogin, onLogout}) => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={isLoggedIn? (<Home onLogout={onLogout} />) : (<Auth onLogin={onLogin} />)} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
