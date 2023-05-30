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
        <div key={user.id} className="mt-4">
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <p>{user.email}</p>
          <p>{user.dob}</p>
          <p>{user.weight}lbs</p>
          <p>{user.height}in</p>
          <button onClick={() => setSelectedUser(user)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default Community;
