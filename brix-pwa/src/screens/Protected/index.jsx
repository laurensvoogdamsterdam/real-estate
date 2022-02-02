import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useFirebase from "../../hooks/useFirebase";
import Welcome from "../Welcome";

export default function Protected({ children }) {
  const { auth } = useFirebase();
  const [user] = useAuthState(auth);

  return user ? children : <Welcome />;
}
