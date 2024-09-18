// PWD: 9TAjKZHTcmCwoINq

import express, { Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors"

const app: Express = express();
const Port = process.env.PORT || 3001


app.use(express.json());
app.use(cors())

const mongoURI: string = "mongodb+srv://upliftsamuel:9TAjKZHTcmCwoINq@personal-finance.whnb1.mongodb.net/";

mongoose.connect(mongoURI).then(() =>console.log("CONNECTED TO MONGODB")).catch((err) =>console.log("FAILED TO CONNECT TO MONGODB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(Port, () => {
    console.log(`Server Running on Port ${Port}`);
})