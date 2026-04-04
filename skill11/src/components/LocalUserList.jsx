import { useEffect, useState } from "react";

function LocalUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/user.json")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="card">
      <h2>Local Users</h2>

      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}

      {users.map(user => (
        <div key={user.id} className="item">
          <p><b>{user.name}</b></p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default LocalUserList;