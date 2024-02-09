import React, { useState, useEffect } from "react"
import UploadPost from "./UploadPost"
import Posts from "./Posts"
import communityBackground from "../../images/communityBackground.jpg"

const GlobalCommunityPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:3030/api/posts")
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            console.error(
                "There has been a problem with fetch:",
                error
            )
        }
    }

    const handleNewPost = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts])
    }

    const style = {
        backgroundImage: `url(${communityBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
    }

    return (
        <div style={style}>
            <UploadPost onPostSubmit={handleNewPost} />
            {posts.map((post) => (
                <Posts key={post._id} post={post} /> 
            ))}
        </div>
    )
}

export default GlobalCommunityPage
