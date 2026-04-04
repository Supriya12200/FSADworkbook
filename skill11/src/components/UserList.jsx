import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => console.log("Error"));
  }, []);

  return (
    <div className="card">
      <h2>API Users</h2>

      {loading ? (
        <p className="status">Loading...</p>
      ) : (
        users.map(user => (
          <div key={user.id} className="item">
            <p><b>{user.name}</b></p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default UserList;