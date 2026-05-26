import { Router } from "express";
import { getIndex } from "../controllers/indexController.js";
import { getNew, postNew } from "../controllers/newMessageController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);

indexRouter.get("/new", getNew);
indexRouter.post("/new", postNew);

export default indexRouter;