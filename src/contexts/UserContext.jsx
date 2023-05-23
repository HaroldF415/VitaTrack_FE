import { createContext, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  return <UserContext.Provider value={{ user, setUser, selectedUser, setSelectedUser }}>{children}</UserContext.Provider>;
};
