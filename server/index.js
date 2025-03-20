import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import userRoutes from './routes/UserRoutes.js';

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json()); 

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.post("/test", (req, res) => {
  console.log("Received test request:", req.body);
  res.json({ message: "Test successful", receivedData: req.body });
});



app.use("/api/users", userRoutes);





const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI:", process.env.MONGO_URI);

console.log(
  "User routes registered at: http://localhost:" + PORT + "/api/users"
);



mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB Connection Error:", err));
