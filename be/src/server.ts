import express from "express";
import { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import routes from "./routes";
// import { registerDependencies } from "./di.container";

async function boostrap() {
  const app = express();
  app.use(
    cors({
      origin: ["http://localhost:4200"],
      credentials: true,
    })
  );

  //   await registerDependencies();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(routes);

  app.use("/", (req: Request, res: Response, next: NextFunction) => {
    // res.redirect("/products");
  });

  app.listen(3000, "localhost", () => {
    console.log("Server listening on port 3000");
  });
}
boostrap();
