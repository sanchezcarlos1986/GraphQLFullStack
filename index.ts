import { ApolloServer } from "apollo-server";
import { resolvers } from "./db/resolvers";
import { typeDefs } from "./db/schema";

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: () => {
    const myContext = "hola";

    return { myContext };
  },
});

server
  .listen()
  .then(({ url }: { url: string }) =>
    console.log(`Server running in URL ${url}`)
  );
