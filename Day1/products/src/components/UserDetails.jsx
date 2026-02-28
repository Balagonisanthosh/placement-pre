import React, { useState } from "react";
import UserDashboard from "./userDashboard";

const UserDetails = () => {
  const [usersList, setUsersList] = useState([
    { id: 1, username: "santhu", role: "junior developer" },
    { id: 2, username: "sai", role: "junior developer" },
    { id: 3, username: "Anadh", role: "junior developer" },
  ]);

  const handlePromote = (id) => {
    const updatedUsers = usersList.map((user) =>
      user.id === id ? { ...user, role: "Senior Developer" } : user
    );

    setUsersList(updatedUsers);
  };

  return (
    <div className="flex flex-wrap gap-6 p-6">
      {usersList.map((user) => (
        <UserDashboard
          key={user.id}
          username={user.username}
          role={user.role}
          onPromote={() => handlePromote(user.id)}
        />
      ))}
    </div>
  );
};

export default UserDetails;