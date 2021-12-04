import { tareas } from "./sample";
import User from "./models/User";

export const resolvers = {
  Query: {
    saludo(root, { name }, context) {
      console.log(context);
      return "Hola " + name;
    },
    numero: () => {
      return 2;
    },
    tareas() {
      return tareas;
    },
    async Users() {
      const users = await User.find();
      return users;
    },
  },

  Mutation: {
    crearTarea(_, { input }) {
      input._id = tareas.length;
      //para agregar una nueva tarea .push
      tareas.push(input);
      return input;
    },
    async crearUsuario(_, { input }) {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    async eliminarUsuario(_, { _id }) {
      return await User.findByIdAndDelete(_id);
    },
    async actualizarUsuario(_, { _id, input }) {
      return await User.findByIdAndUpdate(_id, input, { new: true });
    },
  },
};
