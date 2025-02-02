import express from "express";
import productsRouter from "./routes/products.js";
import cartsRouter from "./routes/carts.js";


const app = express();
const PORT = 8080;

// Middleware para interpretar JSON
app.use(express.json());

// Rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});