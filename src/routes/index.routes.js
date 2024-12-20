import {Router} from 'express'


const router = Router()
import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt.js";
router.get("/", (req, res) => {
  try {
    res.render('index.ejs', {
      cssPaths: ['/css/estilos.css', '/css/estilo-footer.css']
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router