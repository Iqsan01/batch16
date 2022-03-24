import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import uploadDownloadHelper from "../helpers/uploadDownloadHelper";

const router = Router()

router.get('/',indexCtrl.curriculumCtrl.findAll)
router.get('/:id',indexCtrl.curriculumCtrl.findOne)
router.get("/images/:filename",uploadDownloadHelper.showProductImage)
router.post('/',uploadDownloadHelper.uploadSingleFile,indexCtrl.curriculumCtrl.createCurriculum)
router.put('/:id',uploadDownloadHelper.uploadSingleFile,indexCtrl.curriculumCtrl.update)
export default router