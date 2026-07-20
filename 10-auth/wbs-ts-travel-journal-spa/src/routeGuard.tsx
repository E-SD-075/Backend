import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuth } from "./context/authContext";

// Pages that require you to be LOGGED IN (ex: /create)
export function RequireAuth({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return null; // could return a spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

// Pages that require you to be LOGGED OUT (ex: /login, /register)
export function RequireGuest({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();

  console.log("USER FROM THE REQUIREGUEST: ", user);

  if (loading) {
    return null;
  }

  if (user) {
    // already logged in, you shouldn't see login/register
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
