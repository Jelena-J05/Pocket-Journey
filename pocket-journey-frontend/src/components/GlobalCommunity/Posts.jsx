import React from "react"
import PostReaction from "./PostReaction"
import PostComments from "./PostComments"

const Posts = ({ post }) => {
    const user = post.user[0]
    return (
        <div className="container my-3" style={{ opacity: 0.9 }}>
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="card border border-0">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src={`${
                                        user.avatar
                                    }?${new Date().getTime()}`}
                                    alt="User Avatar"
                                    className="rounded-circle me-2"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                    }}
                                />
                                <h5 className="mb-0">{user.name}</h5>{" "}
                            </div>
                            <p className="card-text">{post.description}</p>

                            <PostReaction postId={post.id} />
                            <PostComments postId={post.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
