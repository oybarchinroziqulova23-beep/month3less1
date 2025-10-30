import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mainRouter from "./routes/main.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", mainRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlayapti...`));
