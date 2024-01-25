import express from "express"
const apiRouter = express.Router()

apiRouter.get("/test", (req, res) => {
    res.json({ message: "hello, world" })
})

apiRouter.post("/body", (req, res) => {
    console.log(req.body)

    res.status(200).send()
})

/* import userRouter from "./users/userRouter.js"
import loginRouter from "./login.js"
 */
/* apiRouter.use("/profile", userRouter)
apiRouter.use("/login", loginRouter)
 */
export default apiRouter
