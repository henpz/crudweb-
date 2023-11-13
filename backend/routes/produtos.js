import express from "express"
import {getProdutos, venderProduto} from "../controllers/produto.js"

const router = express.Router()

router.get("/", getProdutos);
router.post("/produtos/vender/:id", venderProduto)

export default router