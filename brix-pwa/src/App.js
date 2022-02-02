import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useNavigation from "./hooks/useNavigation";
import config from "./config";
import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";
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
    <LoadingOverlay active={loading} spinner>
      <Router>
        <div className='bg-gray-200 '>
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
            <Routes>
              <Route
                exact
                path='/home'
                element={
                  <Protected>
                    <Home />
                  </Protected>
                }
              />
              <Route
                exact
                path='/store'
                element={
                  <Protected>
                    <Store />
                  </Protected>
                }
              />
              <Route
                exact
                path='/profile'
                element={
                  <Protected>
                    <Profile />
                  </Protected>
                }
              />
              <Route
                exact
                path='/discover'
                element={
                  <Protected>
                    <Discover />
                  </Protected>
                }
              />
              <Route
                exact
                path='/inbox'
                element={
                  <Protected>
                    <Discover />
                  </Protected>
                }
              />
              <Route
                path='/*'
                element={
                  <Protected>
                    <Home />
                  </Protected>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </LoadingOverlay>
  );
}
