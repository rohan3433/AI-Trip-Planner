import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
app.use(express.json()); 

app.use("/api/users", userRoutes);




const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB Connection Error:", err));
