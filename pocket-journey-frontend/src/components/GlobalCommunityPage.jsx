import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import UploadPost from "./UploadPost";
import FooterDark from "./Footer/FooterDark";
import "./GlobalCommunity.scss"

const GlobalCommunityPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Caricare i post
  }, []);

  return (
    <>
      <div>
        <UploadPost />
        {posts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
      <FooterDark/>
    </>
  );
};

export default GlobalCommunityPage;
