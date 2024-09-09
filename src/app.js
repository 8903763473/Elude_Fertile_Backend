import express from "express";
import http, { createServer } from "http";
import adminRouter from "./router/adminRoter.js";
import inventoryRouter from "./router/inventoryRouter.js"
import cors from "cors";
import db from "./db/db.js";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/admin", adminRouter);
app.use("/api",inventoryRouter)

const PORT = process.env.PORT || 5700;  

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export { app };