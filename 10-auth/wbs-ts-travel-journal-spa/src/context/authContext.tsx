import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import type { ReactNode } from "react";

type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  roles: string[];
};

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const AUTH_URL = import.meta.env.VITE_APP_TRAVEL_JOURNAL_AUTH_URL as
  | string
  | undefined;

if (!AUTH_URL) {
  throw new Error(
    "AUTH URL is required, are you missing VITE_APP_TRAVEL_JOURNAL_AUTH_URL in .env?",
  );
}

const baseAuthURL = `${AUTH_URL}/auth`;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // true until we check /auth/me

  // hydrate user from cookie on first load
  useEffect(() => {
    // This effect runs once on mount to fetch the current user.
    // We track `alive` so we don't call setState after unmount.
    // Why: fetch() and res.json() are async. The component might unmount
    // before they finish. If we still call setUser/setLoading after unmount,
    // React will warn ("can't update state on an unmounted component").
    // Setting `alive = false` in the cleanup lets us bail out safely.

    let alive = true;

    (async () => {
      try {
        const res = await fetch(`${baseAuthURL}/me`, {
          method: "GET",
          credentials: "include", // send cookies
        });

        if (!res.ok) {
          if (alive) setUser(null);
          return;
        }

        const data = await res.json();
        if (alive) {
          setUser(data.user);
        }
      } catch {
        if (alive) setUser(null);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  // logout: tell auth server to delete refresh token + clear cookies, then clear local state
  const logout = useCallback(async () => {
    try {
      await fetch(`${baseAuthURL}/logout`, {
        method: "DELETE",
        credentials: "include",
      });
    } catch {
      // ignore network errors here
    } finally {
      setUser(null);
    }
  }, []);

  const value: AuthContextValue = {
    user,
    loading,
    setUser,
    logout,
  };

  console.log("USER FROM CONTEXT", user);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
}
