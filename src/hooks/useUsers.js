import { useState, useEffect } from "react";
import axios from "axios";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3003/users");
        setUsers(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  return { users, error };
};
