import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import YAML from "yamljs";
import swaggerUI from "swagger-ui-express";
import { limiter } from "./middlewares/rateLimiter.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import apiRoutes from "./routes/index.js";
import { logger } from "./config/logger.js";

const swaggerDocument = YAML.load("./docs/swagger.yaml");

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(morgan("dev"));

// Routes
app.use("/api", apiRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Health check
app.get("/", (req, res) => res.send("Backend Portfolio API running..."));

// Error handler
app.use(errorHandler);

export { app };
