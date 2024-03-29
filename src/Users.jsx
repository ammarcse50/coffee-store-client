import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();

  const [users, setUsers] = useState(loadUsers);

  const handleDelete = (id) => {
    console.log("delete id", id);

    fetch(
      ` https://coffee-store-server-ez6apvq1b-ammars-projects-dc5c7534.vercel.app/user/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(users),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted done");

          const filter = users.map((user) => user._id !== id);

          setUsers(filter);
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>EMail</th>
            <th>CREATION TIME</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {loadUsers.map((user) => (
            <tr key={user._id}>
              <th>{user._id}</th>
              <td>{user.email}</td>
              <td>{user.createAt}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-sm"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
