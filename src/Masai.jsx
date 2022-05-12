import "./styles.css";
import { useEffect, useState } from "react";
import { Post } from "./Post";

const Scroll = () => {
  var postsPerPage = 30;
  const [posts, setPosts] = useState([...Array(postsPerPage)]);

  var postNumber = postsPerPage;

  function handleScroll() {
    var isAtBottom =
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop <=
      document.documentElement.clientHeight;

    if (isAtBottom) {
      // Load next posts
      postNumber += postsPerPage;

      setPosts([...posts, ...Array(postNumber)]);
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="App" style={{ lineHeight: "2" }}>
      {posts.map((item, i) => (
        <Post title={"Hello" + (i + 1)} />
      ))}
    </div>
  );
};

export default Scroll;
