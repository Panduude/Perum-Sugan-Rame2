import express from "express";
 
// import { 
//     getAllProducts,
// } from "../controllers/products.js";
import { 
    getAllBeritas,
} from "../controllers/beritas.js";
 
const router = express.Router();
 
router.get('/', getAllBeritas);
// router.get('/', getAllBeritas);
// router.get('/:id', getProductById);
// router.post('/', createProduct);
// router.patch('/:id', updateProduct);
// router.delete('/:id', deleteProduct);
 
export default router;