import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { connect } from "./database";

const app = express();
connect();

app.get("/", (req, res) => {
  res.json({
    mensaje: "Hola Mundo",
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
      mensajeId: "test",
    },
  })
);

app.listen(3000, () => console.log("Sevidor corriendo en el puerto 3000"));
