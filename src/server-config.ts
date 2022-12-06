import { PrismaClient } from "@prisma/client";
import { Express, json, Router } from "express";
import { recordRouter } from "./records/controllers/record-controller.js";
import cors from "cors";

const route = Router()

route.use("/RecordService", recordRouter);

export class ServerConfig {

  PORT = 3000;
  
  constructor(private app: Express, private prismaClient: PrismaClient) {}

  runApp() {
    this.app.use(json());
    this.app.use(cors());

    this.app.use("/api", route);

    this.app.listen(this.PORT, () => {
      console.log(`Listening in port http://localhost:${this.PORT}`);
    });
  }

}
