import express from "express"
import { Post } from "./postsModel.js"
/* import avatarUpload from "../a-settings/cloudinary.js" */
import authControl from "../a-settings/authControl.js"
import { Comment } from "../postcomments/commentsModel.js";


const postsRouter = express.Router()

postsRouter

.get("/", async (req, res) => {
    try {
        let posts = await Post.find()
        .populate('user')
          .populate('comments');
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})
    
.post("/", authControl, async (req, res) => {
        try {
            const newPost = new Post({
                user: req.user._id, // Assumendo che authControl aggiunga l'oggetto user a req
                ...req.body,
            });
    
            await newPost.save();
            res.status(201).send(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).send("Server error");
        }
    })

    .post("/:postId/comments", authControl, async (req, res) => {
        try {
            const { text } = req.body; // Ottieni il testo del commento dal corpo della richiesta
            const postId = req.params.postId; // Ottieni l'ID del post dal parametro URL
    
            // Crea un nuovo commento
            const newComment = await Comment.create({
                text: text,
                user: req.user._id, // ID dell'utente autenticato
                post: postId,
            });
    
            // Aggiungi il commento al post specifico
            await Post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } });
    
            res.status(201).json(newComment);
        } catch (error) {
            console.error(error);
            res.status(500).send("Server Error");
        }
    });

    /* .get(
        "/",
         authControl, async (req, res, next) => {
            try {
                let posts = await Post.find()
                res.send(posts)
            } catch (error) {
                next(error)
            }
        }
    ) 
    .get(
        "/:id",
        authControl,  async (req, res, next) => {
            try {
                let post = await Post.findById(req.params.id)
                res.send(post)
            } catch (error) {
                next(error)
            }
        }
    )  */


    /* .post("/", async (req, res) => {

        const newPost = await Post.create({
            ...req.body,
        })

        res.status(201).send(newPost)
    })

    .put(
        "/:id",
        authControl,  async (req, res, next) => {
            try {
                let post = await Post.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                    }
                )
                res.send(post)
            } catch (error) {
                next(error)
            }
        }
    ) 
    .delete("/:id", async (req, res, next) => {
        try {
            await Post.deleteOne({
                _id: req.params.id,
            })
            res.send(204)
        } catch (error) {
            next(error)
        }
    }) 

    .patch("/:id/avatar", avatarUpload, async (req, res, next) => {
        try {
            console.log(req.file)
            let updated = await Post.findByIdAndUpdate(
                req.params.id,
                { avatar: req.file.path },
                { new: true }
            )
            res.send(updated)
        } catch (error) {
            next(error)
        }
    }) */

export default postsRouter
