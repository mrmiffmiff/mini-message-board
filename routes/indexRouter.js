import { Router } from "express";
import { getIndex } from "../controllers/indexController.js";
import { getNew } from "../controllers/newMessageController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);

indexRouter.get("/new", getNew);

export default indexRouter;