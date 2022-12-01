import { ServerConfig } from "./src/server-config.js";
import { PrismaClient } from "@prisma/client";
import express from "express";

(function() {
  const prisma = new PrismaClient();
  const app = express();
  const server = new ServerConfig(app, prisma);
  server.runApp();
})()
