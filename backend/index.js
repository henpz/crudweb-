import express from "express"
import cors from "cors"
import produtoRoutes from "./routes/produtos.js"
import vendaRoutes from './routes/vendas.js'
import { inserirProdutos } from "./db.js"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/", produtoRoutes )
app.use("/carrinho", vendaRoutes)

// inserirProdutos()  pra adicionar todos os dados no bdd//

app.listen(8800, () => {
    console.log("Servidor rodando");
  });