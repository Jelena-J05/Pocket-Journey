import express from "express";
import { Flight } from "./flightsModel.js";

const flightsRouter = express.Router();

flightsRouter
  .get("/", async (req, res, next) => {
    try {
      const flights = await Flight.find();
      res.json(flights);
    } catch (error) {
      res.status(500).send(error);
      next(error);
    }
  })    /*WORKING*/
  .get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const flight = await Flight.findOne({ _id: id });
      res.status(200).json(flight);
    } catch (error) {
      next(error);
    }
  })  /*WORKING*/

  .post("/", async (req, res) => {
    const newFlight = await Flight.create({
      ...req.body,
    });

    res.status(201).send(newFlight);
  })   /*WORKING*/

  .put("/:id", async (req, res, next) => {
    try {
        const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFlight) {
            return res.status(404).send("Flight not found");
        }
        res.json(updatedFlight);
    } catch (error) {
        next(error);
    }
})  /*WORKING*/


  .delete("/:id", async (req, res, next) => {
    try {
      const deletedFlight = await Flight.findByIdAndDelete(req.params.id);

      if (!deletedFlight) {
        return res.status(404).send();
      }

      res.status(204).send({ message: "Flight deleted" });
    } catch (error) {
      next(error);
    }
  }); /*WORKING*/

export default flightsRouter;
