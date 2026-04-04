import axios from "axios";
import { useEffect, useState } from "react";

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchData = () => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setPosts(res.data.posts))
      .catch(() => console.log("Error"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPosts = posts.filter(post =>
    filter ? post.userId === Number(filter) : true
  );

  return (
    <div className="card">
      <h2>Fake API Posts</h2>

      <div className="controls">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Users</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>
        </select>

        <button onClick={fetchData}>Refresh</button>
      </div>

      {filteredPosts.map(post => (
        <div key={post.id} className="item">
          <p><b>{post.title}</b></p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FakePostList;