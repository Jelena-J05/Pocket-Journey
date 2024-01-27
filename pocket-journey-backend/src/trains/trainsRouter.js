import express from "express";
import { Train } from "./trainsModel.js";

const trainsRouter = express.Router();

trainsRouter
  .get("/", async (req, res, next) => {
    try {
      const trains = await Train.find();
      res.json(trains);
    } catch (error) {
      res.status(500).send(error);
      next(error);
    }
  }) /*WORKING*/
  .get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const train = await Train.findOne({ _id: id });
      res.status(200).json(train);
    } catch (error) {
      next(error);
    }
  }) /*WORKING*/

  .post("/", async (req, res) => {
    const newTrain = await Train.create({
      ...req.body,
    });

    res.status(201).send(newTrain);
  })

  .put("/:id", async (req, res, next) => {
    try {
      const updatedTrain = await Train.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedTrain) {
        return res.status(404).send("Train not found");
      }
      res.json(updatedTrain);
    } catch (error) {
      next(error);
    }
  })  /*WORKING*/

  .delete("/:id", async (req, res, next) => {
    try {
      const deletedTrain = await Train.findByIdAndDelete(req.params.id);

      if (!deletedTrain) {
        return res.status(404).send();
      }

      res.status(204).send({ message: "Train deleted" });
    } catch (error) {
      next(error);
    }
  }); /*WORKING*/

export default trainsRouter;
