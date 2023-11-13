import express from 'express';
import { getVendas, cancelarCompra } from '../controllers/venda.js'; 

const router = express.Router();

router.get('/compras', getVendas); 
router.delete('/compras/:id', cancelarCompra);  

export default router;





