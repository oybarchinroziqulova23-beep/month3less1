import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mainRoutes from "./routes/mainRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", mainRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlayapti...`));
