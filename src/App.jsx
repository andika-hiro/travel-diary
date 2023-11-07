import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/posts/Home";
import LoginPage from "./pages/Login";
import Navigation from "./components/Navigation";
import RegisterPage from "./pages/Register";
import DetailPage from "./pages/posts/Detail";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <HomePage />
            </>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/detail/:id"
          element={
            <>
              <Navigation />
              <DetailPage />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Navigation />
              <ProfilePage />
            </>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
