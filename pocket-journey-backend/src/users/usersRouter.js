import express from "express"
import { User } from "./usersModel.js"
import avatarUpload from "../a-settings/cloudinary.js"
import authControl from "../a-settings/authControl.js"
import bcrypt from "bcrypt"
/* import passport from "passport"
 */
const usersRouter = express.Router()

usersRouter
    .get(
        "/",
         authControl, async (req, res, next) => {
            try {
                let users = await User.find()
                res.send(users)
            } catch (error) {
                next(error)
            }
        }
    ) /*WORKING*/
    .get(
        "/:id",
        authControl,  async (req, res, next) => {
            try {
                let user = await User.findById(req.params.id)
                res.send(user)
            } catch (error) {
                next(error)
            }
        }
    ) /*WORKING*/

    .post("/", async (req, res) => {
        /* WORKING */
        const password = await bcrypt.hash(req.body.password, 10)
        const newUser = await User.create({
            ...req.body,
            password: password,
        })

        res.status(201).send(newUser)
    })

    .put(
        "/:id",
        authControl,  async (req, res, next) => {
            try {
                let user = await User.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                    }
                )
                res.send(user)
            } catch (error) {
                next(error)
            }
        }
    ) /*WORKING*/

    .put("/profile", authControl, async (req, res, next) => {
        try {
            const userId = req.user.id; // Assumendo che 'req.user' sia popolato dal middleware di autenticazione con i dati dell'utente loggato
            let user = await User.findByIdAndUpdate(userId, req.body, {new: true});
            res.send(user);
        } catch (error) {
            next(error)       
        }

    })

    .delete("/:id", async (req, res, next) => {
        try {
            await User.deleteOne({
                _id: req.params.id,
            })
            res.send(204)
        } catch (error) {
            next(error)
        }
    }) /*WORKING*/

    .patch("/:id/avatar", avatarUpload, async (req, res, next) => {
        try {
            console.log(req.file)
            let updated = await User.findByIdAndUpdate(
                req.params.id,
                { avatar: req.file.path },
                { new: true }
            )
            res.send(updated)
        } catch (error) {
            next(error)
        }
    })

//Logout 

.delete("/session", async (req, res) => {})


export default usersRouter

/* .get(
        "/:id/blogs",
        JWTAuthMiddleware, async (req, res, next) => {
            try {
                let author = await Blog.find({
                    author: req.params.id,
                }).populate({
                    path: "author",
                    select: ["name", "lastName", "avatar"],
                })
                res.send(author)
            } catch (error) {
                next(error)
            }
        }
    ) */



/*   .get("/me", authControl, async (req, res, next) => {
        /* WORKING */
/*         try {
            const user = await User.findOne({ email: req.user.email }).populate(
                {
                    path: "experiences",
                    select: ["description"],
                }
            )
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    })


/*     .patch(
        "/:id/avatar",
        authControl,
        upload.single("avatar"),
        async (req, res, next) => {
            /* WORKING */
/*             try {
                const { id } = req.params
                const updatedUser = await User.findByIdAndUpdate(id, {
                    image: req.file.path,
                })
                res.send(updatedUser)
            } catch (error) {
                next(error)
            }
        }
    )
 */

    //OAUTH 2 routes

/*     .get(
        "/oauth-google",
        passport.authenticate("google", {
            scope: ["profile", "email"],
            prompt: "select_account",
        })
    )
 */
/*     .get(
        "/oauth-callback",
        passport.authenticate("google", {
            failureRedirect: "/",
            session: false,
        }),
        async (req, res) => {
            const payload = { id: req.user._id }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "1h",
            })
            res.redirect(
                `http://localhost:3000?token=${token}&userId=${req.user._id}`
            )
        }
    )
 */
// Logout
//  .delete("/session", async (req, res) => {})

