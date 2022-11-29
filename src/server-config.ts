import Fastify, {FastifyInstance} from "../node_modules/fastify/fastify";

export class ServerConfig {
  private app: FastifyInstance
  constructor(app: FastifyInstance) {
    this.app = app
  }
}
