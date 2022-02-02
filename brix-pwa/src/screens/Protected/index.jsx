import * as React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import useFirebase from "../../hooks/useFirebase";

export default function Protected({ children }: { children: JSX.Element }) {
  const { auth } = useFirebase();
  const [user] = useAuthState(auth);
  const location = useLocation();

  if (!user) {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }

  return children;
}
