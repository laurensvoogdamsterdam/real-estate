import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useNavigation from "./hooks/useNavigation";
import config from "./config";
import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Store from "./screens/Store";
import Profile from "./screens/Profile";
import Discover from "./screens/Discover";
import useFirebase from "./hooks/useFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Protected from "./screens/Protected";
import LoadingOverlay from "react-loading-overlay";

export default function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();
  const { auth } = useFirebase();
  const [user, loading] = useAuthState(auth);

  return (
    <LoadingOverlay active={loading} spinner text={"Loading"}>
      <Router>
        <div className='bg-gray-200 h-screen'>
          <Navbar
            user={user}
            nav={config.nav}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
          />
          <Tabbar
            user={user}
            nav={config.nav}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
          />

          <main>
            <Routes default='/home'>
              <Route
                path='/home'
                element={
                  <Protected>
                    <Home />
                  </Protected>
                }
              />
              <Route
                path='/store'
                element={
                  <Protected>
                    <Store />
                  </Protected>
                }
              />
              <Route
                path='/profile'
                element={
                  <Protected>
                    <Profile />
                  </Protected>
                }
              />
              <Route
                path='/discover'
                element={
                  <Protected>
                    <Discover />
                  </Protected>
                }
              />
              <Route
                path='/inbox'
                element={
                  <Protected>
                    <Discover />
                  </Protected>
                }
              />
              <Route path='/' element={<Welcome />} />
              <Route path='/signin' element={<Welcome />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LoadingOverlay>
  );
}
