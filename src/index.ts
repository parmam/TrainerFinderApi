import express from "express";
import cors from "cors";
import { routes } from "@routes/index";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
