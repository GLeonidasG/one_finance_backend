import { PrismaClient } from "@prisma/client";
import { Express, json, Router } from "express";
import cors from "cors";

const route = Router()

route.get("/greetings", (_, res) => {
  return res.status(200).send({ message: "Hello there" });
});
route.post("/posthere", (req, res) => {
  return res.status(200).send(req.body);
});

export class ServerConfig {
  
  constructor(private app: Express, private prismaClient: PrismaClient) {}

  runApp() {
    this.app.use(json());
    this.app.use(cors());

    this.app.use("/api", route);

    this.app.listen(3000, () => console.log("Listening in port http://localhost:3000"));
  }

}
