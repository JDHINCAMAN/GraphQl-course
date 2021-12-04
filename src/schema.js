import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        saludo(name: String!): String
        numero: Int
        tareas: [Tareas]
        Users: [User]
    }

    type Tareas {
        _id: ID
        title: String!
        description: String!
        number: Int
    }

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int!
    }

    type Mutation {
        crearTarea(input: TareaInput): Tareas
        crearUsuario(input: UserInput): User
        eliminarUsuario(_id: ID): User
        actualizarUsuario(_id: ID, input: UserInput): User
    }

    input TareaInput {
        title: String!
        description: String!
        number: Int
    }

    input UserInput {
        firstname: String!
        lastname: String!
        age: Int!
    }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
