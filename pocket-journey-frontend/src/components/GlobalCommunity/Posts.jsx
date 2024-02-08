import React from "react"
import PostReaction from "./PostReaction"
import PostComments from "./PostComments"
import { useUser } from "../../contexts/UserContext"

const Posts = ({ post }) => {
    const user = post.user[0]
    return (
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="card border border-0">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                              
                                        <img
                                            src={`${
                                                user.avatar
                                            }?${new Date().getTime()}`} // Usa l'avatar dell'utente
                                            alt="User Avatar"
                                            className="rounded-circle me-2"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                            }}
                                        />
                                        <h5 className="mb-0">{user.name}</h5>{" "}
                                        {/* Usa il nome dell'utente */}
                                
                            </div>

                            {/* Descrizione del post */}
                            <p className="card-text">{post.description}</p>

                            {/* Reazioni e commenti al post */}
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
