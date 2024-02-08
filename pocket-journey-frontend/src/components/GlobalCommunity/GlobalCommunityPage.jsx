import React, { useState, useEffect } from "react";
import UploadPost from "./UploadPost";
import Posts from "./Posts"; // Assumi che questo sia il componente che rende ogni post

const GlobalCommunityPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:3030/api/posts");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
        }
    };

    const handleNewPost = (newPost) => {
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    return (
        <div>
            <UploadPost onPostSubmit={handleNewPost} />
            {posts.map(post => (
                <Posts key={post._id} post={post} /> // Usa _id come chiave
            ))}
        </div>
    );
};

export default GlobalCommunityPage;
