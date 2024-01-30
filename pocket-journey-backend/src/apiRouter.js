import express from "express"
import flightsRouter from "./flights/flightsRouter.js"
import trainsRouter from "./trains/trainsRouter.js"
import hotelsRouter from "./hotels/hotelsRouter.js"
import restaurantsRouter from "./restaurants/restaurantsRouter.js"
import activitiesRouter from "./activities/activitiesRouter.js"
import usersRouter from "./users/usersRouter.js"
import loginRouter from "./login/loginRouter.js"
 


const apiRouter = express.Router()


apiRouter.get("/test", (req, res) => {
    res.json({ message: "hello, world" })
})

apiRouter.post("/body", (req, res) => {
    console.log(req.body)

    res.status(200).send()
})

apiRouter.use("/flights", flightsRouter)
apiRouter.use("/trains", trainsRouter)
apiRouter.use("/hotels", hotelsRouter)
apiRouter.use("/restaurants", restaurantsRouter)
apiRouter.use("/activities", activitiesRouter)
apiRouter.use("/users", usersRouter)
apiRouter.use("/login", loginRouter) 


export default apiRouter
