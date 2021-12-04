import mongoose from "mongoose";
require("dotenv").config({ path: "variables.env" });

export async function connect() {
  try {
    await mongoose.connect(process.env.BD);

    console.log("Base de datos conectada");
  } catch (error) {
    console.log("Hay un error, busque y corrija");
    console.log(error);
  }
}
