import React from "react";
import { FaDev } from "react-icons/fa";

// import styles from "./App.module.css";
import useNavigation from "./hooks/useNavigation";
import config from "./config";

import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";

export default function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <div className="bg-gray-200 h-screen">
      <Navbar
        navigationData={config.nav}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={config.nav}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div className="flex items-center justify-center text-5xl text-gray-300 h-5/6">
        <FaDev />
      </div>
    </div>
  );
};