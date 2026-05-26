import { Router } from "express";
import { getIndex } from "../controllers/indexController.js";
import { getNew, postNew } from "../controllers/newMessageController.js";
import { getDetails } from "../controllers/detailsController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);

indexRouter.get("/new", getNew);
indexRouter.post("/new", postNew);

indexRouter.get("/details/:id", getDetails);

export default indexRouter;