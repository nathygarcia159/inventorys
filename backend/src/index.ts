import dotenv from "dotenv";
import express from 'express';
import bodyParser from "body-parser";
import cors from "cors"
import helmet from "helmet";
import morgan from "morgan";



import productRoutes from './routes/productRoutes'
import cartRoutes from './routes/cartRoutes'

dotenv.config();
const app =express();
app.use(express.json()); // nos ayuda a leer archivos json
app.use(helmet());// dar resouesta de api
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));//damos permisos para dar informacion al frontend
app.use(morgan("common"));// enviar imnformacion desde postgret
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());



app.use("/products", productRoutes)
app.use ("/cart",cartRoutes )

const port = Number(process.env.PORT)||3001;
app.listen(port,"0.0.0.0",()=>{
    console.log(`servidor ejecutando en port ${port}`);
})