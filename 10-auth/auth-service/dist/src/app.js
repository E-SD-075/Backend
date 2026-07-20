import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db.js";
import authRouter from "./routes/auth.route.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { PORT, CLIENT_BASE_URL } from "./config.js";
const app = express();
app.set("trust proxy", 1);
// middleware
app.use(helmet());
app.use(cors({
    origin: CLIENT_BASE_URL,
    credentials: true,
    exposedHeaders: ["WWW-Authenticate"],
}));
app.use(express.json());
app.use(cookieParser());
// routes
app.use("/auth", authRouter);
// error handling
app.use(notFoundHandler);
app.use(errorHandler);
// connect with the db first, and then we start listening
const start = async () => {
    await connectDB();
};
app.listen(PORT, () => {
    console.log(`AUth server listening on port ${PORT}`);
});
start();
//# sourceMappingURL=app.js.map