import { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";

// feito em formato de componente para aparecer no menu do Drawer
export default function Logout() {
  const { setAuthState } = useAuth();

  useEffect(() => {
    setAuthState({
      token: null,
      user: null,
      auth: false,
    });
  }, [setAuthState]);

  return <></>;
}
