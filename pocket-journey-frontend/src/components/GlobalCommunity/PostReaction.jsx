import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons"

const PostReaction = ({ postId }) => {
    const [reactions, setReactions] = useState({
        like: 0,
        love: 0,
    })

    const addReaction = (reactionType) => {
        setReactions((prevReactions) => ({
            ...prevReactions,
            [reactionType]: prevReactions[reactionType] + 1,
        }))
    }

    return (
        <div>
            <button
                className="reaction-button me-2 border border-0 text-primary rounded-3"
                onClick={() => addReaction("like")}
            >
                <FontAwesomeIcon icon={faThumbsUp} />{" "}
                {reactions.like > 0 ? reactions.like : ""}
            </button>
            <button
                className="reaction-button border border-0 text-danger rounded-3"
                onClick={() => addReaction("love")}
            >
                <FontAwesomeIcon icon={faHeart} />{" "}
                {reactions.love > 0 ? reactions.love : ""}
            </button>
        </div>
    )
}

export default PostReaction
