import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import compression from "compression";
import * as sapper from "@sapper/server";
import PrismicConfig from "./prismic-config";
import Prismic from "prismic-javascript";

const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("port", PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, "static")));
app.use(compression({ threshold: 0 }));

// Middleware to inject prismic context
app.use((req, res, next) => {
  Prismic.getApi(PrismicConfig.apiEndpoint).then(api => {
    req.prismic = {
      ref: api.masterRef.ref,
      apiEndpoint: PrismicConfig.apiEndpoint,
      api
    };
    next();
  });
});

app.use(sapper.middleware());

app.listen(PORT, () => {
  process.stdout.write(`Running on: http://localhost:${PORT}\n`);
});
