import express from "express";
import routes from "./routes/router.js";
import { engine } from "express-handlebars";
const app = express();
const PORT = process.env.PORT || 3000;

//Motor de Plantilla
app.set("view engine", "hbs");
app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("views", "./views");

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use("/", routes);

app.listen(PORT, () =>
  console.log(`Example app listening on port http://localhost:${PORT}`)
);
