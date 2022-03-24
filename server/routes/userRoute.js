import { Router } from "express";
import authJWT from "../helpers/authJWT";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.post("/signin",authJWT.authenticate,authJWT.login);
router.post("/signup", indexCtrl.userCtrl.signup);

export default router;