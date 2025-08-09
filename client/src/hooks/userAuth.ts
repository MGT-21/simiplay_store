import {jwtDecode} from "jwt-decode";

interface DecodedToken {
  exp: number;
  id?: number;
  name?: string;
  email?: string;
}

export function getUser() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded: DecodedToken = jwtDecode(token);


    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return null;
    }

    return decoded;
  } catch {
    return null;
  }
}
