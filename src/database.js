import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.dfcao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    console.log("Base de datos conectada");
  } catch (error) {
    console.log("Hay un error, busque y corrija");
    console.log(error);
  }
}
