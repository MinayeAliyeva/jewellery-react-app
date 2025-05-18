import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";

interface IDecoded {
  email?: string;
  name?: string;
  tel?: string;
  surname?: string;
}

interface AuthContextType {
  decoded: IDecoded | null;
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  decoded: null,
  token: null,
  setToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [decoded, setDecoded] = useState<IDecoded | null>(null); // custom hook or helper do it 

  //! basa sal
  const storedToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (storedToken) {
      try {
        const decodedData: IDecoded = jwtDecode(storedToken);
        setToken(storedToken);
        setDecoded(decodedData);
      } catch (e) {
        console.error("Token decoding failed", e);
        setToken(null);
        setDecoded(null);
      }
    }
  }, [storedToken]);

  const updateToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem("accessToken", newToken);
      try {
        const decodedData: IDecoded = jwtDecode(newToken);
        setToken(newToken);
        setDecoded(decodedData);
      } catch {
        setDecoded(null);
      }
    } else {
      localStorage.removeItem("accessToken");
      setToken(null);
      setDecoded(null);
    }
  };

  return (
    <AuthContext.Provider value={{ decoded, token, setToken: updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
