import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useUsers } from "../../hooks/useUsers";

const Community = () => {
  const { users, error } = useUsers();
  const { setSelectedUser } = useContext(UserContext);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          {/* ... user fields ... */}
          <button onClick={() => setSelectedUser(user)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default Community;
